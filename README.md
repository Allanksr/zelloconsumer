# What is this?

Instantiate Zello Consumer Easily

# Installation

`npm i zelloconsumer --save`

Then...

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
