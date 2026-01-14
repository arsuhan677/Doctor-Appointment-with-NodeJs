const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "please inter your product name."]
        },
        email: {
            type: String,
            require: [true, "Please inter your email."]
        },
        phone: {
            type: Number,
        }  
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;