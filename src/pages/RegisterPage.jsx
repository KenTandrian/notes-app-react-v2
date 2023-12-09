import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onChange(e, field) {
    setRegData((p) => ({ ...p, [field]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (regData.password !== regData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const result = await register({
      email: regData.email,
      name: regData.name,
      password: regData.password,
    });
    if (!result.error) navigate("/");
  }

  return (
    <section className="register-page">
      <h2>Fill the form to register account.</h2>
      <form className="register-page__form" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={regData.name}
          onChange={(e) => onChange(e, "name")}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={regData.email}
          onChange={(e) => onChange(e, "email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={regData.password}
          onChange={(e) => onChange(e, "password")}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={regData.confirmPassword}
          onChange={(e) => onChange(e, "confirmPassword")}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link style={{ textDecoration: "underline" }} to="/login">
          Login here
        </Link>
      </p>
    </section>
  );
}
