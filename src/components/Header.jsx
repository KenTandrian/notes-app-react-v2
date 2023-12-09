import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts";

export default function Header() {
  const navigate = useNavigate();
  const { onLogout } = useContext(AppContext);
  return (
    <div className="note-app__header">
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        My Notes
      </h1>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          className="note-app_archive-button"
          onClick={() => navigate("/archive")}
        >
          Archive
        </button>
        <button className="note-app__icon-button" onClick={onLogout}>
          <FiLogOut />
        </button>
      </div>
    </div>
  );
}
