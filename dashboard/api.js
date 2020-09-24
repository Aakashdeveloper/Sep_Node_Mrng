const express = require('express');
const app = express();
const port = process.env.PORT || 6700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="users";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.status(200).send('Health OK')
});

app.get('/users',(req,res) => {
    var query = {}
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('nodesep');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})