import React from "react";
import NotesList from "./NotesList";
import { getArchivedNotes } from "../utils/local-data";

export default function ArchivePage() {
  const notes = getArchivedNotes();
  return <NotesList notesList={notes} title="Archived Notes" />;
}
