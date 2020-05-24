const express= require("express");
const app =express();
const itemRoute = express.Router();

let itemModel = require('../Modelos/items.modelos');

  // Get all items
  itemRoute.route('/').get((req, res) => {
    itemModel.find({},'body',function (err, data) {
        if (err){
          console.log(error)
        }else {
        res.json(data)
        console.log(data);
      }
    
    })
  });

module.exports=itemRoute;
