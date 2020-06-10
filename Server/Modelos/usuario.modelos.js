const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const users= new Schema({

    userr:{type: String},

    user_items:{

        item_id:{type: String},

        answer:{type: String}
    }
}
,{collection:'users'
    })
    
module.exports =mongoose.model("Users", users );