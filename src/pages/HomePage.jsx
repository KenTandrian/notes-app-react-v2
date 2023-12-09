import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/network-data";

export default function HomePage() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  async function load() {
    try {
      const { data } = await getActiveNotes();
      if (data) setNotes(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

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
