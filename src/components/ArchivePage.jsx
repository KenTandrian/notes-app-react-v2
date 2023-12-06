import React from "react";
import NotesList from "./NotesList";

export default function ArchivePage({ notes }) {
  return (
    <NotesList
      notesList={notes.filter((note) => note.archived === true)}
      title="Archived Notes"
    />
  );
}
