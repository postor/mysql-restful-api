/**
 * 自动生成的代码
 */
 
var config = require('./config')
var knex = require('knex')(config.db);

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf