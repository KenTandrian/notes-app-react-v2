import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AppContext from "./contexts";
import NotFoundPage from "./pages/404";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const { authData } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {authData.loading ? (
            // Replace with Loading Page
            <Route path="*" element={<></>} />
          ) : !authData.user ? (
            <>
              <Route index element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route index element={<HomePage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/new" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
