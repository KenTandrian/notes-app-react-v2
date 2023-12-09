import { useContext } from "react";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { LuLanguages } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts";

export default function Header() {
  const navigate = useNavigate();
  const { authData, onLogout, t, theme, toggleLocale, toggleTheme } =
    useContext(AppContext);
  return (
    <div className="note-app__header">
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        {t("My Notes", "Catatan Saya")}
      </h1>
      <div style={{ display: "flex", gap: "8px" }}>
        {authData.user && (
          <button
            className="note-app_archive-button"
            onClick={() => navigate("/archive")}
          >
            {t("Archive", "Arsip")}
          </button>
        )}
        <button className="note-app__icon-button" onClick={toggleLocale}>
          <LuLanguages />
        </button>
        <button className="note-app__icon-button" onClick={toggleTheme}>
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        {authData.user && (
          <button className="note-app__icon-button" onClick={onLogout}>
            <FiLogOut />
          </button>
        )}
      </div>
    </div>
  );
}
