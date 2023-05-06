import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Palette";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Palette from "./Palette";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [colors, setColors] = useState(false);
  const [bgColor, setBgColor] = useState();

  const [note, setNote] = useState({
    title: "",
    content: "",
    noteBack: "",
  });

  const showColors = () => {
    setColors(colors ? false : true);
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };
  const inputEvent = (event) => {
    console.log("event", event);

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    console.log(note);
    if (note.title !== "" || note.content !== "") {
      props.passNote(note, bgColor);
      setNote({
        title: "",
        content: "",
      });
      setBgColor(null);
      setColors(false);
      setExpand(false);
    }
  };

  const handlePropChange = (value) => {
    setBgColor(value);
  };

  const color = [
    { id: 1, value: "rgb(255 255 255)" },
    { id: 2, value: "#aecbfa" },
    { id: 3, value: "#a7ffeb" },
    { id: 4, value: "#ccff90" },
    { id: 5, value: "#fff475" },
    { id: 6, value: "#fbbc04" },
    { id: 7, value: "#f28b82" },
  ];

  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
            <form style={{ backgroundColor: bgColor }}>
              {expand ? (
                <input
                  name="title"
                  type="text"
                  onChange={inputEvent}
                  value={note.title}
                  placeholder="Title"
                  autoComplete="off"
                />
              ) : null}

              <textarea
                name="content"
                rows=""
                column=""
                onChange={inputEvent}
                value={note.content}
                placeholder="Write a note"
                onClick={expandIt}
              ></textarea>
              <div style={{ marginTop: 6, marginBottom: 6, marginLeft: 3 }}>
              {expand ? (
                <>
                  <div className="allButtons" role="button" onClick={addEvent}>
                    <AddIcon
                      color="primary"
                      style={{ width: 29, height: 26 }}
                      sx={{ fontSize: 40 }}
                      className="addButton"
                    />
                  </div>
                  <div
                    className="allButtons"
                    role="button"
                    onClick={showColors}
                  >
                    <PaletteOutlinedIcon
                      color="primary"
                      sx={{ fontSize: 40 }}
                      className="colorBtn"
                    />
                  </div>
                </>
              ) : null}
            </div>
            </form>
            

          {colors ? (
            <div className="palette">
              {color.map((col, index) => {
                return (
                  <Palette
                    index={col.id}
                    key={col.id}
                    colval={col}
                    myprop={handlePropChange}
                  />
                );
              })}
            </div>
          ) : null}
      </div>
    </>
  );
};

export default CreateNote;
