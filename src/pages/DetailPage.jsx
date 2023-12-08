import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/local-data";
import NotFoundPage from "./404";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  function onDelete(id) {
    const note = getAllNotes().find((note) => note.id === id);
    if (!note) return;
    const result = window.confirm(
      `Are you sure you want to delete "${note.title}"?`
    );
    if (result) deleteNote(note.id);
  }

  function onArchive(id) {
    const note = getAllNotes().find((note) => note.id === id);
    if (!note) return;
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }
  }

  if (!note) {
    return <NotFoundPage />;
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__date">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
      <div className="detail-page__action">
        <button
          className="detail-page__archive-button"
          onClick={() => {
            onArchive(id);
            navigate("/");
          }}
        >
          {note.archived === false ? "Archive" : "Unarchive"}
        </button>
        <button
          className="detail-page__delete-button"
          onClick={() => {
            onDelete(id);
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
}
