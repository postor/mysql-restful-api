# mysql-restful-api

线上效果：http://172.104.79.155:4000/restful/admin/#/user/list

示例代码仓库：https://github.com/postor/mysql-restful-api-example


给每个表生成对应的restful接口文件，作为Router使用在你的express项目中。|generate files for restful api for each table, require them as routers and use in your app
- 可用于现有的express项目|designed for an working express
- 所有的逻辑都是生成的，都可以改|more flexable


用到的项目|related projects
- bookshelf.js http://www.bookshelfjs.org/
- ng-admin https://ng-admin-book.marmelab.com/


## 如果不是现有的项目，就新建一个|prepare a working express if you don't have one
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

## 使用本项目生成restful代码|use this to generate code
```shell
npm install mysql-restful-api --save
node node_modules/mysql-restful-api/cli.js
#path_for_generated_files
#host
#user
#password
#db
#done!
vi app.js
```
## 应用这些生成的代码|use generated code
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
定制情况（自由发挥）|cases
```javascript
//default
app.use('/restful',require('./restful/default-router'))

//only table
app.use('/table1',require('./restful/routers/table1')))
```
定制Router的实现（具体修改自由发挥）|customize table router/actions
```shell
vi path_for_generated_files/table_name #and modify it
```
## 默认的restful规则|restful standard
- listView      => GET    /users    
- creationView  => POST   /users    
- showView      => GET    /users/:id
- editionView   => PUT    /users/:id
- deletionView  => DELETE /users/:id

/restful/test_table/1
```javascript
  {"id":1,"name":"2017-01-13 12:56:25"}
```
## 后台管理页面|admin page
/restful/admin/
- using ng-admin https://github.com/marmelab/ng-admin
