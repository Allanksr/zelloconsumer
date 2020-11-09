const express = require('express')  
const bodyParser = require('body-parser') 
var path = require('path')

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//app.use(express.static(__dirname + "/sdk/"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/views')))
//app.use(express.static(__dirname + "/sdk"))

    function widget(args0){
             var port = args0['port']
        return new Promise( (resolve) => {
            if(port != null){
                app.get('/', function(req, res){ res.render('index', {token: args0['jwt']})  })
                app.listen(port)
                resolve({port: `running on port: ${port['port']}`})
            }else{
                app.get('/', function(req, res){ res.render('index', {token: args0['jwt']})  })
                app.listen(3000)
                resolve({port: `running on port: 3000`})
            }              
        }).then(port =>  port)
    
    }

module.exports.widget = widget