import React from "react";
import NotesList from "./NotesList";

export default function HomePage({ notes, setNotes }) {
  function onDelete(id) {
    const result = window.confirm("Are you sure you want to delete this?");
    if (result) {
      setNotes((notes) => notes.filter((note) => note.id !== id));
      // toast.success('Note deleted!');
    } else {
      // toast.error('Deletion cancelled!');
    }
  }

  function onArchive(id) {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  }

  return (
    <>
      <h2 className="note-body__heading">Welcome to your personal notes!</h2>
      <a href="new">
        <button className="note-body__add-note-button" onClick={() => {}}>
          Add new note
        </button>
      </a>
      <h2>Active Notes</h2>
      <NotesList
        notesList={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archive</h2>
      <NotesList
        notesList={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}
