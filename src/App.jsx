import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getAllNotes } from "./utils/local-data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArchivePage from "./components/ArchivePage";

export default function App() {
  const [notes, setNotes] = React.useState(getAllNotes());

  function onDelete(id) {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    const result = window.confirm(
      `Are you sure you want to delete "${note.title}"?`
    );
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
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="note-app__body">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  notes={notes}
                  onArchive={onArchive}
                  onDelete={onDelete}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <ArchivePage
                  notes={notes}
                  onArchive={onArchive}
                  onDelete={onDelete}
                />
              }
            />
            <Route path="/new" />
            <Route path="/notes/:id" />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
