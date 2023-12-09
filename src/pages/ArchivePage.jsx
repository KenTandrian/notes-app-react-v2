import React, { useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import { getArchivedNotes } from "../utils/network-data";

export default function ArchivePage() {
  const [notes, setNotes] = useState([]);

  async function load() {
    try {
      const { data } = await getArchivedNotes();
      if (data) setNotes(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return <NotesList notesList={notes} title="Archived Notes" />;
}
