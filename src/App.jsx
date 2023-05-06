import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
"hi"
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note,bgColor) => {
    console.log("bg in app",bgColor)
    console.log("note is",note)
    note.noteBack=bgColor
    console.log("after note is",note)
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete=(id)=>{
    setAddItem((oldData)=>
        oldData.filter((currdata,indx)=>{
            return indx!==id;}
        )
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>

      {addItem.map((val, index) => {
        console.log(val.noteBack)
        return (
          <Note
            color={val.noteBack}
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete }
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
