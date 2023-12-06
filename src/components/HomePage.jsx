import React from "react";
import NotesList from "./NotesList";
import { getActiveNotes } from "../utils/local-data";

export default function HomePage() {
  const notes = getActiveNotes();
  return (
    <>
      <h2 className="note-body__heading">Welcome to your personal notes!</h2>
      <a href="new">
        <button className="note-body__add-note-button" onClick={() => {}}>
          Add new note
        </button>
      </a>
      <NotesList
        notesList={notes.filter((note) => note.archived === false)}
        title="Active Notes"
      />
    </>
  );
}
