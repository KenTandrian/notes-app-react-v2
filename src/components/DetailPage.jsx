import React from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function DetailPage({ notes, onArchive, onDelete }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__date">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
      <div className="detail-page__action">
        <button
          className="detail-page__archive-button"
          onClick={() => onArchive(id)}
        >
          {note.archived === false ? "Archive" : "Unarchive"}
        </button>
        <button
          className="detail-page__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </section>
  );
}
