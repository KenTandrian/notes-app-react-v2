import React, { useState } from "react";
import NoteInput from "./NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const INITIAL_STATE = {
  title: "",
  body: "",
};

export default function AddPage() {
  const [data, setData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  return (
    <section className="add-page">
      <NoteInput
        title={data.title}
        onTitleChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
        onBodyInput={(e) =>
          setData((p) => ({ ...p, body: e.target.innerHTML }))
        }
      />
      <div>
        <button
          className="add-page__button"
          type="button"
          title="Save"
          onClick={() => {
            addNote(data);
            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </section>
  );
}
