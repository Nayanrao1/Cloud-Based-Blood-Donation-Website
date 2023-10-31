const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
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
    bloodGroup:{
        type: String,
        required: true
    },
    isDoner:{
        type: Boolean,
        required:true
    }

})

const User = new mongoose.model('user', userSchema);

module.exports = User;