const Apointment = require("../model/apointment.model");
const Doctor = require("../model/doctor.model");

const getAllDoctors = async (req, res) => {
  const doctor = await Doctor.find({});
  if (!doctor)
    res.json({
      status: "404",
      message: "there is no doctor data",
    });
  res.json({
    status: "success",
    message: "doctor data in get success",
    data: doctor,
  });
};

const getDoctor = async (req, res) => {
  const id = req.params.id;
  const doctor = await Doctor.findById(id);

  const date = new Date().toISOString().split('T')[0]

  const apointment = await Apointment.find({ doctorId: id, date})
  if(!doctor) res.json({
    message: 'doctor not found'
  })
  res.json({
    message: 'Doctor is found',
    data: doctor,
    apointment: apointment
  })
}

const getDateDoctor = async (req, res) => {
  const id = req.params.id;
  const doctor = await Doctor.findById(id);
  const date = req.params.date;
  const apointment = await Apointment.find({ doctorId: id, date });
  if (!doctor)
    res.json({
      message: "doctor not found",
    });
    res.json({
      message: 'doctor is found',
      data: doctor,
      apointment: apointment
    })
};

const createDoctor = async (req, res) => {
  try {
    const {
      name,
      title,
      experiance,
      location,
      worktime,
      bio,
      education,
      services,
    } = req.body;

    if (
      !name ||
      !title ||
      !experiance ||
      !location ||
      !worktime ||
      !bio ||
      !education ||
      !services
    ) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required",
      });
    }

    const newDoctor = new Doctor({
      name,
      title,
      experiance,
      location,
      worktime,
      bio,
      education,
      services,
    });

    const savedDoctor = await newDoctor.save();

    return res.status(201).json({
      status: "success",
      message: "Doctor created successfully",
      data: savedDoctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndUpdate(id, req.body);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor in not found" });
    }
    const updateDoctor = await Doctor.findById(id);
    res.status(200).json(updateDoctor);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  // const { id } = req.body;
  const { id } = req.params;
  const doctor = await Doctor.findByIdAndDelete(id);
  res.json({
    status: "success",
    message: "Doctor delete is successfylly!",
    data: doctor,
  });
};

module.exports = {
  getAllDoctors,
  getDoctor,
  getDateDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
