import debounce from "lodash.debounce";
import React from "react";

const DEBOUNCE_TIME_MS = 250;

export default function SearchBar({ onSearch }) {
  const onSearchbarChange = debounce((event) => {
    onSearch(event.target.value);
  }, DEBOUNCE_TIME_MS);

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
