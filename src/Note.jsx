import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const [hover, setHover] = useState(false);
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div
        className="note"
        style={{backgroundColor:props.color}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        {
          hover?<button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon" />
        </button>: null
        }
        
      </div>
    </>
  );
};

export default Note;
