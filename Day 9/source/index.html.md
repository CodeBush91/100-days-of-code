---
title: MSM API

language_tabs:
  - curl
  - C#
  - Node.js

toc_footers:
  - <a href='#'>Create your API Key  </a>

includes:
  - errors

search: true
---

# API Documentation
The  API provides a simple way to connect with your  data.
Built on RESTful principles, the API uses HTTP methods and verbs. Both JSON and XML requests are supported. JSON is returned by all responses.

# Authentication

This API uses API keys to allow access to the API. You can register a new API key in your tool.

# Testing

## Running in Postman

(images/postman.png)

The entire API collection can be easily imported into Postman, by clicking the button below:

[![Run in Postman]
(https://run.pstmn.io/button.svg)]

Postman is a free application that allows you to execute test calls in an intuitive interface. 

# Chocolate

## Get All Chocolates

```shell
curl -X GET --header 'Accept: application/json' 'http://{{URL}}/CHOC/api/chocolate'
```


> The above command returns JSON structured like this:

```json
{
   "total":1,
   "items":[
     {"id":1,
      "name":"Twix",
      "Cost":10,
      "Date":"2017-01-11T08:44:59.143"
      }]
}
```


This endpoint retrieves all chocolates.

### HTTP Request

`GET http://{{URL}}/MSM/api/chocolates`


<aside class="success">
Remember — you must be authenticated!
</aside>

## Get a Specific Chocolate

```shell
curl -X GET --header 'Accept: application/json' 'http://{{URL}}/CHOC/api/chocolate/1'
```


> The above command returns JSON structured like this:

```json
{
  "id": 1,
  "name":"Twix",
  "Cost":10,
  "updatedBy": {
    "id": 3,
    "name": "Chocolate, Lover"
  },
  "updatedOn": "2017-01-11T08:44:59.143"
}
```

This endpoint retrieves a specific Chocolate.

### HTTP Request

`GET http://{{URL}}/CHOC/api/chocolate/<ID>`

