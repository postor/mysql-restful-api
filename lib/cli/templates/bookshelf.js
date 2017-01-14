/**
 * 自动生成的代码
 */
 
var config = require('./config.json')
var knex = require('knex')(config.db);

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination')

module.exports = bookshelf