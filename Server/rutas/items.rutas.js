const express= require("express");
const app =express();
const itemRoute = express.Router();
let itemModel = require('../Modelos/items.modelos');
let userModel =require('../Modelos/usuario.modelos');


  // Get all items
  itemRoute.route('/').get((req, res) => {
    itemModel.find({},'body _id title',function (err, data) {
        if (err){
          console.log(err)
        }else {
        res.json(data)
        console.log(data);
      }
    })
  });

// Create or Update user
itemRoute.route('/piaitems/:id').post((req, res) => {
  userModel.findOneAndUpdate({userr: req.params.id} ,{$addToSet:{user_items: req.body}},{new: true, upsert: true, rawResult: true}, function (err, data) {
      if (err){
        console.log(err)
      }else {
      res.json(data)
      console.log(data);
    }
  })
});

// Update user
itemRoute.route('/piapreresult/:id').post((req, res) => {
  userModel.findOneAndUpdate({userr:req.params.id} ,{$addToSet:{result:req.body}},{new:true, upsert: true, rawResult: true}, function (err, data) {
      if (err){
        console.log(err)
      }else {
      res.json(data)
      console.log(data);
    }
  })
});

  //Get single user in pre result page
  itemRoute.route('/piapreresult').get((req, res) => {
    var query=userModel.find().select('_id userr user_items').sort({"_id": -1}).limit(1);
    query.exec(function (err, data) {
      if (err){
        console.log(err)
      }else {
      res.json(data)
      console.log(data);
    }
  }, {})
});

  //Get single user in result page
  itemRoute.route('/piaresult/:userr').get((req, res) => {
    var query=userModel.find({userr:req.params.userr}).limit(1);
    query.exec(function (err, data) {
      if (err){
        console.log(err)
      }else {
      res.json(data)
      console.log(data);
    }
  }, {})
});

// Get users to compare to current user
itemRoute.route('/piapreresult/:carrera').get((req, res) => {
var query1= userModel.find({'result.career':req.params.carrera});
query1.exec(function (err, data) {
  if (err){
    console.log(err)
  }else {
  res.json(data)
  console.log(data);
} 
})
});

module.exports=itemRoute;
