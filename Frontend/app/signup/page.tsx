"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";

import { FaHospital } from "react-icons/fa";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        phone,
      });

      console.log("Register Success:", res.data);

      window.location.href = "/login";

    } catch (err: any) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <div className="flex items-center justify-center space-x-2">
          <FaHospital className="text-blue-600 text-3xl" />
          <span className="text-2xl font-bold text-blue-600">MediCare+</span>
        </div>

        {error && <p className="mb-3 text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="example@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="+880 "
            />
          </div>


          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white text-sm hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
