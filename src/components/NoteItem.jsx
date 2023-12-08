import React from "react";
import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";

export default function NoteItem({ note }) {
  const navigate = useNavigate();
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3
          className="note-item__title"
          onClick={() => navigate(`/notes/${note.id}`)}
        >
          {note.title}
        </h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
    </div>
  );
}
