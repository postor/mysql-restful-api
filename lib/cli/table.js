/**
 * 获取数据库配置文件
 */
var _ = require('lodash')
var fs = require('fs-promise')
var path = require('path')

module.exports.generateTableFiles = generateTableFiles

/**
 * 生成表的文件
 */
function generateTableFiles(folder,tableName,connection){
  
  var primaryKey = ''
  return fs.ensureDir(path.join(folder,'models'))
  .then(()=>{
    return fs.ensureDir(path.join(folder,'routers'))
  })
  .then(()=>{
    return getPrimaryKey(connection,tableName)
  })
  .then((keyName)=>{
    if(!keyName){
      console.log(`table ${tableName} does not have primary key and will have trouble in update and delete!`)
    }
    primaryKey = keyName
    return generateModel(folder,tableName,primaryKey)
  })  
  .then(()=>{
    return generateRouter(folder,tableName,primaryKey)
  })  
}

/**
 * 获取主键
 */
function getPrimaryKey(connection,tableName){
  return new Promise((resolve,reject)=>{
    connection.primary(tableName,(err,primary)=>{
      if(err){
        reject(err)
      }else{
        resolve(primary.Column_name)
      }
    })
  })
}

/**
 * 生成model
 */
function generateModel(folder,tableName,primaryKey){
  var templatePath = path.join(__dirname,'templates','model.tmpl')
  var filePath = path.join(folder,'models',tableName+'.js')
  console.log(filePath)
  return fs.readFile(templatePath, {encoding:'utf8'})
  .then((template)=>{
    var content = _.template(template)({
      primaryKey:primaryKey,
      tableName: tableName
    })
    return fs.writeFile(filePath,content)
  })
}

/**
 * 生成Router
 */
function generateRouter(folder,tableName,primaryKey){
  var templatePath = path.join(__dirname,'templates','router.tmpl')
  var filePath = path.join(folder,'routers',tableName+'.js')
  return fs.readFile(templatePath, {encoding:'utf8'})
  .then((template)=>{
    var content = _.template(template)({
      primaryKey:primaryKey,
      tableName: tableName
    })
    return fs.writeFile(filePath,content)
  })
}
