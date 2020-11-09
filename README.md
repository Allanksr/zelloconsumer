# What is this?

Instantiate Zello Consumer Easily

# Installation

`npm i zelloconsumer --save`

[![Dependency ejs](https://gist.githubusercontent.com/Allanksr/0462f5527dff6591b78a93f7bdb9ee5b/raw/48a73c13eb971bad32a2de0b46b98c8b91598c57/ejs.svg)](https://www.npmjs.com/package/ejs)
|[![Dependency body-parser](https://gist.githubusercontent.com/Allanksr/35a37c96247d6f1988ddd591a40e39b4/raw/62ba8bb9c76239b46e8d1612b81658a7aa1e1500/body-parser.svg)](https://www.npmjs.com/package/body-parser)
|[![Dependency express](https://gist.githubusercontent.com/Allanksr/25c35fbe9e8019a5ab63092b0ad374e5/raw/c353a2ab5e4b1e4ab105acfeedce1cab8d94bc3a/express.svg)](https://www.npmjs.com/package/express)


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

<img src="https://raw.githubusercontent.com/Allanksr/zelloconsumer/gh-pages/test/localhost_3000.PNG" width="400px">

