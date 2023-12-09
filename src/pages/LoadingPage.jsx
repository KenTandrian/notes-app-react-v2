import React from "react";
import Spinner from "../components/Spinner";

export default function LoadingPage() {
  return (
    <section className="loading-page">
      <Spinner />
      <h2>Loading...</h2>
    </section>
  );
}
