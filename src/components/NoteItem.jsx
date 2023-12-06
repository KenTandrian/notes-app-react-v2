import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteItem({ note }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <a href={`/notes/${note.id}`}>
          <h3 className="note-item__title">{note.title}</h3>
        </a>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
    </div>
  );
}
