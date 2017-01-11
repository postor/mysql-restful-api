var prompt = require('prompt')

module.exports = promisePrompt

function promisePrompt(schema){
  return new Promise((resolve,reject)=>{
    prompt.start()
    prompt.get(schema, function (err, result) {      
      prompt.stop()
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}
