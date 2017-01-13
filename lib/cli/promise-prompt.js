var prompt = require('prompt')

promisePrompt.close = function(){
  prompt.stop()
}

module.exports = promisePrompt

function promisePrompt(schema){
  return new Promise((resolve,reject)=>{
    prompt.start()
    prompt.get(schema, function (err, result) {    
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}

