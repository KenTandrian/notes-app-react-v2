export default function Header() {
  return (
    <div className="note-app__header">
      <a href="/">
        <h1>My Notes</h1>
      </a>
      <a href="/archive">
        <button className="note-app_archive-button">Archive</button>
      </a>
    </div>
  );
}
