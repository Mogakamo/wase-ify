const mongoose = require('mongoose');

const Schema = mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: 
    }
})