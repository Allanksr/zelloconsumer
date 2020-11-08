# What is this?

Instantiate Zello Consumer Easily

# Installation

`npm i zelloconsumer --save`

Then...

in your index.js file
```
const zelloconsumer = require('zelloconsumer')

 zelloconsumer.zelloconsumer({
    issuer: 'path/issuer.txt',
    private: 'path/private.json'
}).then(token =>  console.log('token', `${token['response']}`))
.catch(error =>  console.log('token', `${error['error']}`))
```
## Options

Zello Consumer require 2 options, both of which are mandatory:

* *issuer* -  _you get it in_ https://developers.zello.com/

* *privatekey* - _you get it in_ https://developers.zello.com/


after obtaining them, save them in two files _issuer.txt_ and _private.json_
and pass the file path in the function

## Test
node index.js

<img src="https://raw.githubusercontent.com/Allanksr/zelloconsumer/gh-pages/test/token.PNG" width="400px">

