import debounce from "lodash.debounce";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import AppContext from "../contexts";

const DEBOUNCE_TIME_MS = 250;

export default function SearchBar({ onSearch }) {
  const { t } = useContext(AppContext);
  const onSearchbarChange = debounce((event) => {
    onSearch(event.target.value);
  }, DEBOUNCE_TIME_MS);

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder={t("Search for notes...", "Cari catatan...")}
        onChange={onSearchbarChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
