import React from "react";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const notes = getActiveNotes();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="note-body__heading">Welcome to your personal notes!</h2>
      <button
        className="note-body__add-note-button"
        onClick={() => navigate("/new")}
      >
        Add new note
      </button>
      <NotesList notesList={notes} title="Active Notes" />
    </>
  );
}
