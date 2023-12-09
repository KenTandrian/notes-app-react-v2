import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contexts";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";

export default function RegisterPage() {
  const { t } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [cPassword, onCPasswordChange] = useInput("");

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== cPassword) {
      alert("Passwords do not match!");
      return;
    }
    const result = await register({ email, name, password });
    if (!result.error) navigate("/");
  }

  return (
    <section className="register-page">
      <h2>
        {t(
          "Fill the form to register account.",
          "Isi formulir untuk mendaftar akun."
        )}
      </h2>
      <form className="register-page__form" onSubmit={onSubmit}>
        <label htmlFor="name">{t("Name", "Nama")}</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
        <label htmlFor="confirmPassword">
          {t("Confirm Password", "Konfirmasi Password")}
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={cPassword}
          onChange={onCPasswordChange}
        />
        <button type="submit">{t("Register", "Daftar")}</button>
      </form>
      <p>
        {t("Already have an account?", "Sudah punya akun?")}{" "}
        <Link style={{ textDecoration: "underline" }} to="/">
          {t("Login here", "Login di sini")}
        </Link>
      </p>
    </section>
  );
}
