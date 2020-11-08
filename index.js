const fs = require('fs')
 TokenManager = require('./tk')
    function zelloconsumer(args0){
        var issuer = args0['issuer']
        var private = args0['private']
        return new Promise( (resolve, reject) => {
            fs.readFile(issuer,  (err, issuer) =>{
                if(!err){
                    fs.readFile(private,  (err, private) =>{
                        if(!err){
                            var token = TokenManager.createJwt(`${issuer}`, private)
                            resolve({response: token})
                        }else{
                            reject({error: err})
                        }                  
                    })
                }else{
                    reject({error: err})
                }          
        })      
        }).then(token =>  token )
    }
module.exports.zelloconsumer = zelloconsumer
