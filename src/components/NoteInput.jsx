import parser from "html-react-parser";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import AppContext from "../contexts";

export default function NoteInput({
  title,
  onTitleChange,
  onBodyInput,
  initialBodyEdit,
}) {
  const { t } = useContext(AppContext);
  return (
    <div className="add-page__input">
      <input
        className="add-page__input__title"
        placeholder={t("New note", "Catatan baru")}
        value={title}
        onChange={onTitleChange}
        spellCheck="false"
      />
      <div
        className="add-page__input__body"
        contentEditable="true"
        data-placeholder={t(
          "Notes content here....",
          "Isi catatan di sini...."
        )}
        onInput={onBodyInput}
        spellCheck="false"
        suppressContentEditableWarning={true}
      >
        {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ""}
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string,
};
