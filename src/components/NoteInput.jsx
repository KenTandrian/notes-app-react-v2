import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function NoteInput({
  title,
  onTitleChange,
  onBodyInput,
  initialBodyEdit,
}) {
  return (
    <div className="add-page__input">
      <input
        className="add-page__input__title"
        placeholder="New note"
        value={title}
        onChange={onTitleChange}
        spellCheck="false"
      />
      <div
        className="add-page__input__body"
        contentEditable="true"
        data-placeholder="Notes content here ...."
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
