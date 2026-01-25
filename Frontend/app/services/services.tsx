"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Doctor = {
  _id: string;
  description: string;
};

export default function Services() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctor")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.data);
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Link
              href={`/services/${doctor._id}`}
              key={index}
              className="block"
            >
              <div className="p-8 rounded-xl shadow-lg hover:shadow-xl border">
                <h3 className="text-xl font-bold mb-3">
                  Doctor Service
                </h3>
                <p className="text-gray-600 mb-6">
                  {doctor.description}
                </p>
                <span className="text-blue-600 font-medium">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
