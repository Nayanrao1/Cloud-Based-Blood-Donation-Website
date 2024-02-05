const mongoose = require('mongoose');
const validator = require('validator');

const bloodbankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    
    },
    phone:{
        type: Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type: String,
        required: true
    },
   
    isDoner:{
        type: Boolean,
        required:true
    }

})

const Bloodbank = new mongoose.model('bloodbank', bloodbankSchema);

module.exports = Bloodbank;