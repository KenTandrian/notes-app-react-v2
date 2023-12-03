import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteItem({ note, onDelete, onArchive }) {
  const onDeleteClick = () => onDelete(note.id);
  const onArchiveClick = () => onArchive(note.id);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <a href={`/notes/${note.id}`}>
          <h3 className="note-item__title">{note.title}</h3>
        </a>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        {note.archived === false ? (
          <button
            className="note-item__archive-button"
            onClick={onArchiveClick}
          >
            Archive
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={onArchiveClick}
          >
            Unarchive
          </button>
        )}
        <button className="note-item__delete-button" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
