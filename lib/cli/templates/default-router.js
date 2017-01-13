/**
 * 自动生成的代码
 */

var express = require('express')
var config = require('./config.json')

var router = express.Router()

config.tables.forEach((tableName)=>{
  var tableRouter = require(`./routers/${tableName}`)
  router.use(`/${tableName}`, tableRouter)
})

router.get('/',(req,res,next)=>{
  res.json({
    error: 0,
    tables: config.tables
  })
})

module.exports = router