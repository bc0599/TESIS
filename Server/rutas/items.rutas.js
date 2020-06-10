const express= require("express");
const app =express();
const itemRoute = express.Router();

let itemModel = require('../Modelos/items.modelos');
let userModel =require('../Modelos/usuario.modelos');

  // Get all items
  itemRoute.route('/').get((req, res) => {
    itemModel.find({},'body _id',function (err, data) {
        if (err){
          console.log(error)
        }else {
        res.json(data)
        console.log(data);
      }
    })
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
itemRoute.route('/piaitems/:id').put((req, res, next) => {
  userModel.updateOne(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User successfully updated!')
    }
  })
});


module.exports=itemRoute;
