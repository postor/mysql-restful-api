/**
 * 通过输入构造配置文件，数据库连接，表模型等
 */

var getConnectionConfig = require('./lib/cli/connection')

var config = {
  db: {
    client: 'mysql',
    connection: {},
  },
  tables: []
}

getConnectionConfig()
.then((connection)=>{
  config.db.connection = connection
  console.log(JSON.stringify(config))
})

