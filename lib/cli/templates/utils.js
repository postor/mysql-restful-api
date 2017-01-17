/**
 * 自动生成的代码
 */

var keywords = {
  _page: (value,rtn)=>{
    var page = parseInt(value)
    rtn.pager.page = page?page:1
  },
  _perPage: (value,rtn)=>{
    var pageSize = parseInt(value)
    rtn.pager.pageSize = pageSize?pageSize:10
  },
  _sortDir: (value,rtn)=>{
    rtn.sort.direction = value
  },
  _sortField: (value,rtn)=>{
    rtn.sort.column = value    
  },
  _filters: (value,rtn)=>{
    rtn.where = JSON.parse(value) || {}
  }
}


function parseQuery(params){
  var rtn = {
    pager:{
      page: 1,
      pageSize: 10,
    },
    sort:{},
    where: {},
  }

  if(!params) return rtn

  for(var i in params){
    if(keywords[i]){
      keywords[i](params[i],rtn)
    }else{
      rtn.where[i] = params[i]
    }
  }
  return rtn
}

module.exports.parseQuery = parseQuery
