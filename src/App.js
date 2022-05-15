import React, { useState } from "react";
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";

const App = () => {
  const [current, setCurrent] = useState(0);
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const colors = ["#ffcf7d", "#f0a177", "#b095f6", "#55cffa", "#e6ee96"];

  const AddNote = () => {
    setNotes((prev) => [
      {
        bgColor: colors[current],
        text: noteInput,
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <SideBar colors={colors} current={current} setCurrent={setCurrent} />
        <MainPage
          notes={notes}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          AddNote={AddNote}
        />
      </div>
    </>
  );
};

export default App;
