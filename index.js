const fs = require('fs')
 
    var widget = false
    class ZelloConsumer {
        static call(args0){
            var issuer = args0['issuer']
            var privateKey = args0['private']
            widget = args0['widget']
            return new Promise( (resolve, reject) => {
                fs.readFile(issuer,  (err, issuer) =>{
                    if(!err){
                        fs.readFile(privateKey,  (err, privateKey) =>{
                            if(!err){
                                var token = require('./tk').createJwt(`${issuer}`, privateKey)                           
                                resolve({response: token})   
                            }else{
                                reject({error: err})
                            }                  
                        })
                    }else{
                        reject({error: err})
                    }          
            })      
            }).then(token =>  widgetCall(token))
            async function widgetCall(token){
                if(widget){
                    return  require('zelloconsumer/widget').widget({jwt : token['response']})
                }else{
                    return{port: `token was created > ${token['response']}`}
                }             
            }
        }

    }
module.exports = ZelloConsumer