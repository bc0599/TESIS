const express= require("express");
const app =express();
const itemRoute = express.Router();
let itemModel = require('../Modelos/items.modelos');
let userModel =require('../Modelos/usuario.modelos');

var query=userModel.find().sort({"_id": -1}).limit(1);;

  // Get all items
  itemRoute.route('/').get((req, res) => {
    itemModel.find({},'body _id',function (err, data) {
        if (err){
          console.log(err)
        }else {
        res.json(data)
        console.log(data);
      }
    })
  });

  //Get single user
  itemRoute.route('/piapreresult').get((req, res) => {
    query.exec(function (err, data) {
      if (err){
        console.log(err)
      }else {
      res.json(data)
      console.log(data);
    }
  }, {})
});

  // Add User
itemRoute.route('/piaitems').post((req, res, next) => {
  userModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Update user
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

module.exports=itemRoute;
