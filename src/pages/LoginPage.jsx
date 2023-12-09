import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts";
import useInput from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";

export default function LoginPage() {
  const { refreshAuth, t } = useContext(AppContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      try {
        putAccessToken(data.accessToken);
        refreshAuth();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <section className="login-page">
      <h2>
        {t(
          "Come on! Log in to use the application.",
          "Yuk, login untuk menggunakan aplikasi."
        )}
      </h2>
      <form className="login-page__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={onEmailChange}
          required
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={onPasswordChange}
          required
          type="password"
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        {t("Don't have an account yet?", "Belum punya akun?")}{" "}
        <Link style={{ textDecoration: "underline" }} to="/register">
          {t("Register here", "Daftar di sini")}
        </Link>
      </p>
    </section>
  );
}
