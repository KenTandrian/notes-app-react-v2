import React from "react";

export default function SearchBar({ onSearch }) {
  const onSearchbarChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search for notes..."
        onChange={onSearchbarChange}
      />
    </div>
  );
}
