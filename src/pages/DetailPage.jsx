import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../contexts";
import { showFormattedDate } from "../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import NotFoundPage from "./404";
import LoadingPage from "./LoadingPage";

export default function DetailPage() {
  const { t } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  async function load() {
    try {
      const { data } = await getNote(id);
      if (data) setNote(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onDelete(id) {
    const result = window.confirm(
      t(
        `Are you sure you want to delete "${note.title}"?`,
        `Apakah Anda yakin ingin menghapus catatan "${note.title}"?`
      )
    );
    if (result) {
      const { error } = await deleteNote(id);
      if (!error) navigate("/");
    }
  }

  async function onArchive(id) {
    if (note.archived) {
      const { error } = await unarchiveNote(id);
      if (!error) navigate("/archive");
    } else {
      const { error } = await archiveNote(id);
      if (!error) navigate("/");
    }
  }

  if (loading) return <LoadingPage />;
  if (!note) return <NotFoundPage />;

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
          {note.archived === false
            ? t("Archive", "Arsipkan")
            : t("Unarchive", "Batalkan arsip")}
        </button>
        <button
          className="detail-page__delete-button"
          onClick={() => onDelete(id)}
        >
          {t("Delete", "Hapus")}
        </button>
      </div>
    </section>
  );
}
