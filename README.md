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
vi app.js #copy code into app.js
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
#path_for_generated_files
#host
#user
#password
#db
#done!
vi app.js
```
## use generated code
app.js
```javascript

var express = require('express');
var app = express();
app.use('/restful',require('./restful/default-router'))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(80)
```
cases
```javascript
//default
app.use('/restful',require('./restful/default-router'))

//only table
app.use('/table1',require('./restful/routers/table1')))
```
customize table router/actions
```shell
vi path_for_generated_files/table_name #and modify it
```
## restful standard
- listView      => GET    /users    
- creationView  => POST   /users    
- showView      => GET    /users/:id
- editionView   => PUT    /users/:id
- deletionView  => DELETE /users/:id

/restful/test_table?id=1
```javascript
  {"id":1,"name":"2017-01-13 12:56:25"}
```
## admin page
/restful/admin/
- using ng-admin https://github.com/marmelab/ng-admin
