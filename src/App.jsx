import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getAllNotes } from "./utils/local-data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  const [notes, setNotes] = React.useState(getAllNotes());

  function onSearch(text) {
    if (text.length !== 0 && text.trim() !== "")
      setNotes(
        getAllNotes().filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    else setNotes(getAllNotes());
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header onSearch={onSearch} />
        <div className="note-app__body">
          <Routes>
            <Route
              path="/"
              element={<HomePage notes={notes} setNotes={setNotes} />}
            />
            <Route path="/archive" />
            <Route path="/new" />
            <Route path="/notes/:id" />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
