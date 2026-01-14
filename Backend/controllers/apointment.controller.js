const { default: mongoose } = require("mongoose");
const Apointment = require("../model/apointment.model");

const getApointments = async (req, res) => {
  const apointment = await Apointment.find({});
  if (!apointment)
    res.json({
      status: "",
      message: "Apointment in not defind",
    });
  res.json({
    status: "success",
    message: "Apointment is successfylly!",
    data: apointment,
  });
};

const getApointment = async (req, res) => {
  const id = req.params.id;
  const apointment = await Apointment.findById(id);
  if (!apointment)
    res.json({
      status: "404",
      message: "There is no apointment data.!",
    });
  res.json({
    status: "success",
    message: "Apointment feathc data successfylly.!",
    data: apointment,
  });
};

const createApointment = async (req, res) => {
  // mongooes transections
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const { name, email, phone, reason, time, doctorId, date } = req.body;
    const user = await User.findOne({ email });

    let newUser;

    if (!user) {
      const newUser = new User({
        id: date.now(),
        name,
        email,
        phone,
      });
      const nu = await newUser.save();
      newUserId = nu._id;
    }

    const userId = user?._id || newUserId;
    console.log("*************************userid", userId);

    const apointment = await Apointment.find({
      doctorId: doctorId,
      date: date,
      time: time,
    });
    if (apointment.length > 0) {
      res.json({
        status: "404",
        message: "doctor in already booked.!",
      });
    } else {
      const newApointment = new Apointment({
        id: date.now(),
        doctorId,
        date,
        time,
        patientName: name,
        email,
        phone,
        reason,
      });
      const apointment = await newApointment.save()
      res.json({
        status: 'success',
        message: 'new apointmemt done successfylly.!',
        data: apointment
      })
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    console.log('error heppening');
    res.json({
      status: 'error',
      message:'not done success apointment',
      data: error
    })

  }
};

// const createApointment = async (req, res) => {
//   const { doctor, phone, email, patientName, time, date } = req.body;
//   if (!doctor && !phone && !email && !patientName && !time && !date)
//     res.json({
//       status: "404",
//       message: "there is no appointment data",
//     });
//   const apointment = new Apointment({
//     doctor,
//     phone,
//     email,
//     patientName,
//     time,
//     date,
//   });
//   const a = await apointment.save();
//   res.json({
//     status: "success",
//     message: "appointment fetch successfully ",
//     data: a,
//   });
// };

module.exports = {
  getApointments,
  getApointment,
  createApointment,
};
