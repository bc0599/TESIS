const express = require('express');
const app = express();
const userRoute = express.Router();

let userModel =require('../Modelos/usuario.modelos');

// Add User
userRoute.route('/pia-items').post((req, res, next) => {
    SongModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

  // Update user
userRoute.route('/update-user/:id').put((req, res, next) => {
    userModel.findByIdAndUpdate(req.params.id, {
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

module.exports=userRoute;