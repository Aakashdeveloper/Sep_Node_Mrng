var express = require('express');
var cityRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


function router(menu){
    cityRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url,function(err,dc){
          if(err){
            res.status(501).send("Error while connecting")
          }else{
            const dbo= dc.db("nodesep");
            dbo.collection('city').find({}).toArray((err,data) => {
              if(err){
                res.status(402).send("Error while Fetching")
              }else{
                res.render('city',{title:'City Page',citydata:data,menu:menu})
              }
            })
          }
        })
    })

    cityRouter.route('/details')
      .get(function(req,res){
          res.send('details of city')
      })

    return cityRouter
}


module.exports= router