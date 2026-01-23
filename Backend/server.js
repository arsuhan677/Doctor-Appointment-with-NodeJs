// server.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./model/user.model");
const userRoute = require("./routes/user.route");
const doctorRoute = require("./routes/doctor.route")
const apointmentRoute = require("./routes/apointment.route")
const servicesRoute = require("./routes/services.route")
const authRoute = require("./routes/auth.route")


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoute);
app.use("/api/doctor", doctorRoute)
app.use("/api/apointment", apointmentRoute)
app.use("/api/services", servicesRoute)

app.use("/api/auth", authRoute);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => {
  res.send(`Application is running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));