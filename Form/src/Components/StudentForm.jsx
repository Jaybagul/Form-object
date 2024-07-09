import React, { useState } from "react";
import "./Form.css";

function MyForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    grade: "",
    gender: "",
    birthdate: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    <p style={{color:'white',textAlign:'center',fontSize:"30px"}}>Form</p>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input-field ms-2"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field ms-4"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field ms-1"
          />
        </div>

        <div>
          <label htmlFor="grade">Grade:</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="input-field ms-4"
          >
            <option value="">Select your grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="ms-3"
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
              className="ms-3"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="input-field ms-3"
          />
        </div>

        <div>

        </div>

        <div>        </div>

        <button
          type="submit"
          className="btn btn-primary text-center"
          style={{ textAlign: "center", display: "block", margin: "auto" }}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default MyForm;
