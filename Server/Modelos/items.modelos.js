const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const items= new Schema({

    title: {type: String},
    body: {type:String},
    category:{type:String},
    subcategory:{type:String}
},{
    collection:'items'
    })

module.exports=mongoose.model("Item", items );
