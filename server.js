const express = require('express')
const path = require('path')
const server = express()
const database = require('./database')
const port = 8888

server.get('/home/:page',(req,res,next) => {
    var data = []
    var page = parseInt(req.params.page)-1;
    var start = page * 10;
    var end = start + 10;
    for (let i = start; i < end; i++) {
       data.push(database[i])
    }
    res.send(data)
})

server.get('/',(req,res,next)=>{
    console.log('TEST')
    res.sendFile(path.join(__dirname,'/index.html')) 
})
server.use('/public', express.static(path.join(__dirname,'public')));
server.listen(process.env.PORT || port, () => console.log(`Done`))