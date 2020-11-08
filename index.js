const zellosdk = require('./sdk/latest-zcc.sdk.js')

TokenManager = require('./tk')

function zelloconsumer(options){
    console.log('issuer', options.issuer)
    console.log('privatekey', options.privatekey)
    var token = TokenManager.createJwt(`${kissuer}`, privateKey)

    return token
}


module.exports.zelloconsumer = zelloconsumer