import React from "react";
import NoteItem from "./NoteItem";
import SearchBar from "./HeaderSearch";

export default function NotesList({ notesList, title }) {
  const [filteredNotes, setFilteredNotes] = React.useState(notesList);
  function onSearch(text) {
    if (text.length !== 0 && text.trim() !== "")
      setFilteredNotes(
        notesList.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    else setFilteredNotes(notesList);
  }

  return (
    <>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <SearchBar onSearch={onSearch} />
      {filteredNotes.length !== 0 ? (
        <div className="notes-list">
          {filteredNotes.map((item) => (
            <NoteItem key={item.id} note={item} />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No notes here.</p>
      )}
    </>
  );
}
