export default function Header() {
  return (
    <div className="note-app__header">
      <h1>My Notes</h1>
      <a href="/archive">
        <button className="note-app_archive-button">Archive</button>
      </a>
    </div>
  );
}
