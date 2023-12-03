import React from "react";
import NotesList from "./NotesList";

export default function ArchivePage({ notes, onArchive, onDelete }) {
  return (
    <>
      <h2>Archive</h2>
      <NotesList
        notesList={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}
