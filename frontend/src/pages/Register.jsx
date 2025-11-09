import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const images = [
  "https://tse2.mm.bing.net/th/id/OIP.hvYEvrpj0AWhrcyJwkfhqgHaEo?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse1.mm.bing.net/th/id/OIP.hn3rhfY5XzKp5P7ehUhSUQHaE3?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/11/bhindi-ki-sabji-500x500.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/aloo-paratha-680x1020.jpg",
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const API_URL = `${process.env.REACT_APP_API_BASE_URL}/api/auth/register`;
      const res = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Registration form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-md w-full shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="user">User</option>
              <option value="chef">Chef</option>
            </select>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Register
            </button>
          </form>

          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
          {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
