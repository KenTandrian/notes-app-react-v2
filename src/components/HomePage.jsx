import React from "react";
import NotesList from "./NotesList";

export default function HomePage({ notes, onArchive, onDelete }) {
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
        onDelete={onDelete}
        onArchive={onArchive}
        title="Active Notes"
      />
    </>
  );
}
