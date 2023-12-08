import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">404</h3>
      <p className="detail-page__body">Page not found.</p>
      <button
        className="detail-page__archive-button"
        onClick={() => navigate("/")}
      >
        Back to Homepage
      </button>
    </section>
  );
}
