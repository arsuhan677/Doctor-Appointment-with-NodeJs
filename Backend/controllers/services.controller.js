const Services = require("../model/services.model")


const getServices = async (req, res) => {
  const services = await Services.find({});
  if (!services)
    res.json({
      status: "404",
      message: "Services in not defind",
    });
  res.json({
    status: "success",
    message: "Services is successfylly!",
    data: services,
  });
};

const createServices = async (req, res) => {
  const { name, description } = req.body;
  console.log("name:", name);
  if (!name && !description)
    res.status(400).json({
      status: "",
      message: "services not found",
    });
  const services = new Services({
    id: Date.now(),
    name,
    description
  });
  const s = await services.save();
  res.json({
    status: "success",
    message: "Services created successfully",
    data: s,
  });
};


module.exports = {
    getServices,
    createServices
}