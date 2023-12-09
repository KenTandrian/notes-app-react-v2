import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts";
import { login, putAccessToken } from "../utils/network-data";

export default function LoginPage() {
  const appContext = useContext(AppContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = loginData;
    const { error, data } = await login({ email, password });
    if (!error) {
      try {
        putAccessToken(data.accessToken);
        appContext.refreshAuth();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <form className="login-page__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(e) =>
            setLoginData((p) => ({ ...p, email: e.target.value }))
          }
          required
          type="email"
          value={loginData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(e) =>
            setLoginData((p) => ({ ...p, password: e.target.value }))
          }
          required
          type="password"
          value={loginData.password}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun?{" "}
        <Link style={{ textDecoration: "underline" }} to="/register">
          Daftar di sini
        </Link>
      </p>
    </section>
  );
}
