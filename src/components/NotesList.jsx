import PropTypes from "prop-types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { noteItemPropTypes } from "../types";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";

export default function NotesList({ notesList, title }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [filteredNotes, setFilteredNotes] = React.useState(filterNotes(query));

  function filterNotes(query) {
    if (query && query.length !== 0 && query.trim() !== "")
      return notesList.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
    else return notesList;
  }

  function onSearch(text) {
    if (text) setSearchParams({ q: text });
    else {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
    setFilteredNotes(filterNotes(text));
  }

  return (
    <>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <SearchBar onSearch={onSearch} />
      {filteredNotes?.length !== 0 ? (
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

NotesList.propTypes = {
  notesList: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
  title: PropTypes.string.isRequired,
};
