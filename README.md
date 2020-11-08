# What is this?

Instantiate Zello Consumer Easily

# Installation

`npm i zelloconsumer --save`

Then...

```
const zelloconsumer = require('zelloconsumer')
zelloconsumer({
    issuer: 'issuer',
    privatekey: 'privatekey'
})
```
## Options

Zello Consumer require 2 options, both of which are mandatory:

* *issuer* -  _you get it in_ https://developers.zello.com/

* *privatekey* - _you get it in_ https://developers.zello.com/