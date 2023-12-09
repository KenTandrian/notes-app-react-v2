import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import AppContext from "../contexts";
import { addNote } from "../utils/network-data";

const INITIAL_STATE = {
  title: "",
  body: "",
};

export default function AddPage() {
  const { t } = useContext(AppContext);
  const [data, setData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  async function onSubmit() {
    const { error } = await addNote(data);
    if (!error) navigate("/");
  }

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
          onClick={onSubmit}
        >
          {t("Save", "Simpan")}
        </button>
      </div>
    </section>
  );
}
