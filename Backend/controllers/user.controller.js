const User = require("../model/user.model");
// import User from "../model/user.model"

const getUser = async (req, res) => {
  const user = await User.find({});
  if (!user)
    res.json({
      status: "404",
      message: "there is no user data",
    });
  res.json({
    status: "success",
    message: "user data fetch sucessfully ",
    data: user,
  });
};

const createUser = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log("name:", name);
  if (!name && !email && !phone)
    res.status(400).json({
      status: "",
      message: "name not found",
    });
  const user = new User({
    id: Date.now(),
    name,
    email,
    phone,
  });
  const u = await user.save();
  res.json({
    status: "success",
    message: "User created successfully",
    data: u,
  });
};

const updateUser = async (req, res) => {
  //   const { id, name, email, phone } = req.body;
  const { id, name, email, phone } = req.params;
  if (!name && !email && !phone)
    res.status(400).json({
      status: "",
      message: "Name is not found",
    });
  const user = await User.findByIdAndUpdate(id, { name, email, phone });
  res.json({
    status: "success",
    message: "Update successfully!",
    data: user,
  });
};

const deleteUser = async (req, res) => {
  //   const { id } = req.body;
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.json({
    status: "success",
    message: "user delete is successfully!",
    data: user,
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
