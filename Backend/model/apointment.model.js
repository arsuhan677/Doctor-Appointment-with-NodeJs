const  mongoose = require("mongoose");



const ApointmentSchema = mongoose.Schema(
    {
        date: {
            type: String,
            require: true
        },
        time: {
            type: String,
            require: true
        },
        patientName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: Number,
        },
         doctor: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Doctor",
         require: true,
    }
    },
    {
        timestamps: true
    }
);

const Apointment = mongoose.model('apoinment', ApointmentSchema)
module.exports = Apointment;