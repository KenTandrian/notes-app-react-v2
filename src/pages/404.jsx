import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts";

export default function NotFoundPage() {
  const { t } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">404</h3>
      <p className="detail-page__body">
        {t("Page not found.", "Halaman tidak ditemukan.")}
      </p>
      <button
        className="detail-page__archive-button"
        onClick={() => navigate("/")}
      >
        {t("Back to Homepage", "Kembali ke halaman utama")}
      </button>
    </section>
  );
}
