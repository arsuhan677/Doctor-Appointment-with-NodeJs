import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    crearedAt: {type: Date, default: Date.now}
})

export const doctorSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    title: { type: String },
    experiance: { type: String },
    location: { type: String },
    // image: { type: String },
    worktime: { type: String },
    bio: { type: String },
    education: [{ type: String }],
    services: [{ type: String }],
})