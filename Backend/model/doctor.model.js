const { default: mongoose } = require("mongoose");
const Services = require("./services.model");
// const Services = require("./services.model");

const DoctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please inter your product name."],
  },
  title: {
    type: String,
    required: [true, "Please inter doctor name"],
  },
  experiance: {
    type: String,
    required: [true, "inter doctor experince"],
  },
  location: {
    type: String,
    required: [true, "doctor location"],
  },
  worktime: {
    type: String,
    required: [true, "intre doctor require"],
  },
  bio: {
    type: String,
    required: [true, "doctor require"],
  },
  education: {
    type: String,
    required: [true, "inter doctor require"],
  },
  services: {
    type: [String],
    default: [],
  },
  // services: {
  //     type: String,
  //     required: [true, "inter doctor require"]
  // }
});

const Doctor = mongoose.model("Doctor", DoctorSchema);
module.exports = Doctor;
