var express = require('express')
var app = express()

function verifikimiAutorizimit(req, res, next){
    const userIsAutorized = false
    if (userIsAutorized){
        next();
    } else {
        res.status(403).
        send('smunesh me hi')
    }
}

app.get('/aboutus', verifikimiAutorizimit, (req, res)=>{
    res.send('yay you are authorised!')
})

app.listen(3000, ()=>{
    console.log('console is running')
})