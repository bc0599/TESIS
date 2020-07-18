const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var resultados=new Schema({
    _id:false,
    carrera: {type:String},
    puntaje:{type:Number}
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

