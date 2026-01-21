// const mongoose = require('mongoose')

// const UserSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             require: [true, "please inter your product name."]
//         },
//         email: {
//             type: String,
//             require: [true, "Please inter your email."]
//         },
//         phone: {
//             type: Number,
//         }  
//     },
//     {
//         timestamps: true
//     }
// );

// const User = mongoose.model("user", UserSchema);
// module.exports = User;


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);

