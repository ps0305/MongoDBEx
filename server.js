var express = require("express");
var mongodb = require("mongodb");

var app = express();
var mongodbex = mongodb.MongoClient;

//create the RESt API
app.get("/products",function(req,res){
    mongodbex.connect("mongodb://localhost:27017/nodedb",
    function(err,db){
        db.collection("products").find().toArray(function
        (err,array){
            res.send(array);
        });
    });
});
//Assign the port
app.listen(8080);
console.log("server is listening at port no. 8080");