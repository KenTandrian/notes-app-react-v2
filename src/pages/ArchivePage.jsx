import React, { useContext, useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import AppContext from "../contexts";
import { getArchivedNotes } from "../utils/network-data";

export default function ArchivePage() {
  const { locale } = useContext(AppContext);
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

  return (
    <NotesList
      notesList={notes}
      title={locale === "en" ? "Archived Notes" : "Catatan Terarsip"}
    />
  );
}
