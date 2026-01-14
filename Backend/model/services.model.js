const mongoose = require("mongoose");

const ServicesSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Services = mongoose.model("services", ServicesSchema);
module.exports = Services;
