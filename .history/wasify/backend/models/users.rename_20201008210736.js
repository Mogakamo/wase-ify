const mongoose = require('mongoose');

const Schema = mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    },
}, {
        timestamps: true,
    });
    