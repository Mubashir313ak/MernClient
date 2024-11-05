import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/slices/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
