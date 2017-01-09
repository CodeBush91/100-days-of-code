var fs = require('fs');
var marked = require('marked');
var renderer = new marked.Renderer();

var src = fs.readFileSync('./cv.md', 'utf8')

var rendered = marked(src, { renderer: renderer });
fs.writeFile('./cv.html',rendered,function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

