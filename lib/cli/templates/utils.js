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
  _sortDir: ()=>{

  },
  _sortField: ()=>{
    
  }
}


function parseQuery(params){
  var rtn = {
    pager:{
      page: 1,
      pageSize: 10,
    },
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
