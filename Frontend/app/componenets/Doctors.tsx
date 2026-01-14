// app/components/Doctors.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserMd,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/doctor")
      .then((res) => res.json())
      .then((data) => {
        console.log("doctors", data);
        setDoctors(data.data);
      });
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Doctors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced healthcare
            professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src="data:image/jpeg;base64,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"
                    alt="image"
                    width={400}
                    height={300} 
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{doctor.title}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FaUserMd className="mr-3 text-blue-500" />
                      <span>{doctor.experiance} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-3 text-blue-500" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-3 text-blue-500" />
                      <span>{doctor.bio}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-3 text-blue-500" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-3 text-blue-500" />
                      <span>{doctor.services}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaRegClock className="mr-3 text-blue-500" />
                      <span>{doctor.worktime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/apointment/${doctor._id}`}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 inline-block text-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </div>
    </section>
  );
}
