import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import AppContext from "../contexts";
import { getActiveNotes } from "../utils/network-data";

export default function HomePage() {
  const { locale } = useContext(AppContext);
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
      <h2 className="note-body__heading">
        {locale === "en"
          ? "Welcome to your personal notes!"
          : "Selamat datang di catatan pribadi Anda!"}
      </h2>
      <button
        className="note-body__add-note-button"
        onClick={() => navigate("/new")}
      >
        {locale === "en" ? "Add new note" : "Buat catatan baru"}
      </button>
      <NotesList
        notesList={notes}
        title={locale === "en" ? "Active Notes" : "Catatan Aktif"}
      />
    </>
  );
}
