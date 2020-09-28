const express = require('express');
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 9800;

//static file path
app.use(express.static(__dirname+'/public'))
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/users',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Error on login'
        })
    }
    superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id:'841775ffdee13afd7f4f',
        client_secret:'6af79224667933d50c3daaff3ac610f903305df6',
        code:code
    })
    .set('Accept','application/json')
    .end((err,result) => {
        if(err) throw err;
        var accesstoken = result.body.access_token
        const option = {
            url:'https://api.github.com/user',
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Authorization':'token '+accesstoken,
                'User-Agent':'sep-node'
            }
        }
        var output;
        request(option,(err,response,body) => {
            output = body;
            return res.send(output)
        })
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})