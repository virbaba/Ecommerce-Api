// import mongoose package
const mongoose = require('mongoose');

// creating products schema
const productSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: true,
        unique: true
    },

    quantity:{
        type: Number,
        required: true
    },
 
}, {
    timestamps: true
});


const product = mongoose.model('Products', productSchema);

module.exports = product;