/**
 * 获取数据库配置文件
 */
var _ = require('lodash')
var fs = require('fs-promise')
var path = require('path')
var getPrimaryKey = require('./table').getPrimaryKey

module.exports.generateAdminFiles = generateAdminFiles

/**
 * 生成管理后台的文件
 */
function generateAdminFiles(folder,tables,connection,tableDetails){
  return copyNgAdmin(folder)
  .then(()=>{
    return copyAdminJs(folder,tables,connection,tableDetails)
  })
}

/**
 * 拷贝ng-admin的文件
 */
function copyNgAdmin(folder){
  return fs.copy(path.join(__dirname,'templates','admin'),path.join(folder,'admin'))
}

/**
 * 生成admin.js
 */
function copyAdminJs(folder,tables,connection,tableDetails){
  var data = {}

  return Promise.all(tables.map((tableName)=>{
    data[tableName] = {}
    return getPrimaryKey(connection,tableName)
    .then((primaryKey)=>{
      data[tableName].primaryKey = primaryKey
    })
    .then(()=>{
      return new Promise((resolve,reject)=>{
        connection.fields(tableName, (err,fields)=>{
          if(err){
            reject(err)
          }else{
            var filedNames = Object.keys(fields)
            data[tableName].otherFields = filedNames.filter((name)=>{
              return name != data[tableName].primaryKey
            })
            data[tableName].allFields = fields
            data[tableName].tableDetail = tableDetails[tableName]
            resolve(true)
          }
        })
      })      
    })
  }))
  .then(()=>{
    //写文件
    var templatePath = path.join(__dirname,'templates','admin.js.tmpl')
    var filePath = path.join(folder,'admin','admin.js')
    return fs.readFile(templatePath, {encoding:'utf8'})
    .then((template)=>{
      var content = _.template(template)({tables:data})
      return fs.writeFile(filePath,content)
    })
  })
}

