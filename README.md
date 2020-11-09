# What is this?

Instantiate Zello Consumer Easily

# Installation

`npm i zelloconsumer --save`
[![Dependency ejs](https://gist.githubusercontent.com/Allanksr/0462f5527dff6591b78a93f7bdb9ee5b/raw/48a73c13eb971bad32a2de0b46b98c8b91598c57/ejs.svg)
Then...

in your index.js file
```
const zelloconsumer = require('zelloconsumer')

zelloconsumer.call({
        issuer: 'path/issuerKey.txt',
        private: 'path/privateKey.json',
        widget: true
    }).then(port =>  console.log(`${port['port']}`))
    .catch(error =>  console.log(`${error['error']}`))
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

