// // const User = require("../model/user.model");
// // // import User from "../model/user.model"

// // const getUser = async (req, res) => {
// //   const user = await User.find({});
// //   if (!user)
// //     res.json({
// //       status: "404",
// //       message: "there is no user data",
// //     });
// //   res.json({
// //     status: "success",
// //     message: "user data fetch sucessfully ",
// //     data: user,
// //   });
// // };

// // const createUser = async (req, res) => {
// //   const { name, email, phone } = req.body;
// //   console.log("name:", name);
// //   if (!name && !email && !phone)
// //     res.status(400).json({
// //       status: "",
// //       message: "name not found",
// //     });
// //   const user = new User({
// //     id: Date.now(),
// //     name,
// //     email,
// //     phone,
// //   });
// //   const u = await user.save();
// //   res.json({
// //     status: "success",
// //     message: "User created successfully",
// //     data: u,
// //   });
// // };

// // const updateUser = async (req, res) => {
// //   //   const { id, name, email, phone } = req.body;
// //   const { id, name, email, phone } = req.params;
// //   if (!name && !email && !phone)
// //     res.status(400).json({
// //       status: "",
// //       message: "Name is not found",
// //     });
// //   const user = await User.findByIdAndUpdate(id, { name, email, phone });
// //   res.json({
// //     status: "success",
// //     message: "Update successfully!",
// //     data: user,
// //   });
// // };

// // const deleteUser = async (req, res) => {
// //   //   const { id } = req.body;
// //   const { id } = req.params;
// //   const user = await User.findByIdAndDelete(id);
// //   res.json({
// //     status: "success",
// //     message: "user delete is successfully!",
// //     data: user,
// //   });
// // };

// // module.exports = {
// //   getUser,
// //   createUser,
// //   updateUser,
// //   deleteUser,
// // };




const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken

// ----------------- User CRUD -----------------
exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ status: "success", data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "User created",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );

    res.json({ status: "success", data: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({ status: "success", data: deletedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// login



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 2️⃣ User check
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "User not found" });

    // 3️⃣ Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // 4️⃣ JWT generate
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      status: "success",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

