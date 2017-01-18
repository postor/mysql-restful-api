/**
 * 获取数据库配置文件
 */
var promisePrompt = require('./promise-prompt') 

module.exports = getConnectionConfig

/**
 * 获取数据库的配置
 */
function getConnectionConfig(){
  var schema = [{
    name:'host',
    default:'localhost',
    description:'where your mysql hosts? (localhost)' 
  },{
    name:'port',
    default:'3306',
    description:'on port? (3306)' 
  },{
    name:'user',
    default:'root',
    description:'user? (root)' 
  },{
    name:'password',
    default:'',
    description:'password? (empty)' 
  },{
    name:'database',
    default:'test',
    description:'database? (test)' 
  },{
    name:'charset',
    default:'utf8',
    description:'charset? (utf8)' 
  }]
  return promisePrompt(schema)
  
}
