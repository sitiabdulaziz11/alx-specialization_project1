import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const initialFormData = {
  userType: "",
  password: "",
  confirmPassword: "",
  email: "",
  firstname: "",
  middlename: "",
  lastname: "",
  phoneNo: "",
  birthDate: "",
  imageFile: "",
  age: "",
  address: "",
  section: "",
  grade: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    // Validation and data handling
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      firstname: formData.firstname,
      middlename: formData.middlename,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      birth_date: formData.birthDate,
      age: parseInt(formData.age),
      image_file: formData.imageFile,
      gender: "Male", // Assuming gender is static or handled differently
      address: formData.address,
      phone_no: formData.phoneNo,
      grade: formData.grade,
      section: formData.section,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/v1/students", userData);
      if (response.status === 201) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };

  if (isRegistered) {
    return <Link to="/login">Go to Login</Link>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="m-4 p-6 bg-white rounded shadow-md" onSubmit={handleSignup}>
        <label className="block mb-2">
          First Name:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Middle Name:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Last Name:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Birth Date:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Image File:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="file"
            name="imageFile"
            onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0] })}
            required
          />
        </label>
        <label className="block mb-2">
          Age:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Address:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Grade:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Section:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Confirm Password:
          <input
            className="w-full p-2 mt-1 border rounded"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <input
          className="w-full p-2 mt-4 text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-500"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default Signup;
