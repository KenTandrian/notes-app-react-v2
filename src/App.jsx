import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import {
  archiveNote,
  deleteNote,
  getAllNotes,
  unarchiveNote,
} from "./utils/local-data";

export default function App() {
  function onDelete(id) {
    const note = getAllNotes().find((note) => note.id === id);
    if (!note) return;
    const result = window.confirm(
      `Are you sure you want to delete "${note.title}"?`
    );
    if (result) deleteNote(note.id);
  }

  function onArchive(id) {
    const note = getAllNotes().find((note) => note.id === id);
    if (!note) return;
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="note-app__body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/new" element={<AddPage />} />
            <Route
              path="/notes/:id"
              element={<DetailPage onArchive={onArchive} onDelete={onDelete} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
