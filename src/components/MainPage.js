import React from "react";

const MainPage = ({ notes, noteInput, setNoteInput, AddNote }) => {
  return (
    <div className="mainpage_container">
      <div className="notes_input">
        <i className="ph-notepad notes_icon"></i>
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Add notes here"
        />
        <button onClick={AddNote}>Add Note</button>
      </div>

      <div className="mainpage_content">
        <div className="mainpage_header">Notes</div>
        <div className="notes_list">
          {notes?.map((note, index) => {
            return (
              <div
                className="note_item"
                style={{ background: note?.bgColor }}
                key={index}
              >
                {note?.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
