# express-mysql-restful-generator
generate files for restful api for each table, require them as routers and use in your app
- designed for an working express, not only for mysql
- different router for each table
- routers hook to any path, or modify get/post/put/delete actions
- more flexable but you have to do some code, not just config

## prepare a working express
```shell
mkdir myproj
cd myproj
npm init
npm install express --save
vi app.js
node app.js
```
app.js
```javascript
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```
