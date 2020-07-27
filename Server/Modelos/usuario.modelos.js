const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var resultados=new Schema({
    
    "_id": false,

    career: {type:String},

    points:{type:Number},

    coincidence_percentage:{type:String},

    coincidence_questions:[{

        item_id:{type:String},
        answer:{type:String}
    }]

})

const users= new Schema({

    userr:{type: String},

    result:[resultados],

    user_items:[{
        
        _id:false,
        
        item_id:{type: String},

        answer:{type: String}
    }],

},{collection:'users'
    })

module.exports =mongoose.model("Users", users );

