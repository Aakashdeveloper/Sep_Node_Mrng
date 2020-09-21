var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){
      hotelRouter.route('/')
      .get(function(req,res){
        mongodb.connect(url,function(err,client){
          if(err){
            res.status(501).send("Error while connecting")
          }else{
            const dbo = client.db('nodesep')
            dbo.collection('restaurent').find({}).toArray((err,data) => {
              if(err){
                res.status(402).send("Error while Fetching")
              }else{
              //res.send(data)
              res.render('hotels',{title:'Hotels Page',hoteldata:data,menu:menu})
              }
            })
          }
        })
      })

    hotelRouter.route('/details/:id')
      .get(function(req,res){
        //var id = req.params.id
        var {id} = req.params;
        mongodb.connect(url,function(err,client){
          if(err){
            res.status(501).send("Error while connecting")
          }else{
            const dbo = client.db('nodesep')
            dbo.collection('restaurent').findOne({_id:id},(err,data) => {
              if(err){
                res.status(402).send("Error while Fetching")
              }else{
                res.render('hotelDetails',{title:'Details Page',hoteldata:data,menu:menu})
              }
            })
          }
        })
          
      })

      return hotelRouter
}


module.exports = router;