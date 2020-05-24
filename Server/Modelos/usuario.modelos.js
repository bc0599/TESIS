const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const users= new Schema({

    id_user:{type: String},

    user_items: {

        item_id:[{

            type: Number,

            ref:"items"
        }],

        answer:{type: String}
    }
},{collection:'users'
    })
    
module.exports=mongoose.model("Users", users );