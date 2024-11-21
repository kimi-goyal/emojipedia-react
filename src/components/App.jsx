import React from "react";
import Detail from "./Detail";
import emojipedia from "../emojipedia";

function createcard(entry) {
  return (
    <Detail emoji={entry.emoji} name={entry.name} meaning={entry.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createcard)}</dl>
    </div>
  );
}

export default App;
