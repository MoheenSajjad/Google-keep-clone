import React from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

const Palette = (props) => {
  return (
    <>
       {props.index === 1 ? (
          <button
            onClick={() => {
              props.myprop(props.value);
            }}
            className="sample"
            style={{ backgroundColor: props.colval.value }}
          >
            <NotInterestedIcon
              color="action"
              style={{ width: 23, height: 28 }}
            />
          </button>
        ) : (
          <button
            onClick={() => {
              props.myprop(props.colval.value);

            }}
            className="sample"
            style={{ backgroundColor: props.colval.value }}
          ></button>
        )}
    </>
  );
};

export default Palette;
