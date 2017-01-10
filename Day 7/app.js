"use strict"

const
  Router = require('koa-router'),
  passport = require('./auth'),
  koa = require('koa'),
  app = koa();

var Pug = require('koa-pug')

app.outputErrors = true

//for debugging purposes
function *reqlogger(next){
  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
  yield next;
}
app.use(reqlogger);

app.use(Router(app));

app.use(passport.initialize()); 

var pug = new Pug({
  viewPath: './views',
  basedir: './views',
  app: app
})

app.get('/', function *(){
    this.render('home');
});

const publicRouter = new Router();

publicRouter.get('/auth/github', passport.authenticate('github', {scope: ['user','repo']}));
publicRouter.get('/auth/github/callback',
  passport.authenticate('github', {successRedirect:'/', failureRedirect: '/'})
);

app.use(publicRouter.middleware());

const securedRouter = new Router();

function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    this.redirect('/auth/github');
  }
}

securedRouter.get('/app', authed, function *(){
  this.body =  JSON.stringify(this.req.user, null, '\t');
});

app.use(securedRouter.middleware());

app.listen(3000);