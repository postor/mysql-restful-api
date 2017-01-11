# express-mysql-restful-generator
generate files for restful api for each table, require them as routers and use in your app
- designed for an working express, not only for mysql
- different router for each table
- routers hook to any path, or modify get/post/put/delete actions
- more flexable but you have to do some code, not just config

## prepare a working express if you don't have one
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

app.listen(80)
```

## use this to generate code
```shell
npm install express-mysql-restful-generator --save
node node_modules/express-mysql-restful-generator/cli.js
//path/to/configfile
//path/for/generated/files
//host
//user
//password
//db
//table....
vi app.js
```
app.js
```javascript

var restfulRouters = require('express-mysql-restful-generator')
var express = require('express');
var app = express();
app.use('/restful',restfulRouters())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(80)
```
cases
```javascript
//default
app.use('/restful',restfulRouters())

//only table
app.use('/table1',restfulRouters.get('table_name1'))
```
customize table router/actions
```shell
vi path/for/generated/files/table_name
```

