import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="note-app__header">
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        My Notes
      </h1>
      <button
        className="note-app_archive-button"
        onClick={() => navigate("/archive")}
      >
        Archive
      </button>
    </div>
  );
}
