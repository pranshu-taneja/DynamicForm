import React from "react";
import "./Styles/InputSelectorLeftBar.css";
import { v4 as uuidv4 } from "uuid";
import { InputTypes } from "../Utils/InputTypeCreator";
import { GrAddCircle } from "react-icons/gr";

function InputSelectorLeftBar({ setFormConfig }) {
  const handleAdd = (val) => {
    const newVal = JSON.parse(JSON.stringify(val));
    newVal.id = uuidv4();

    setFormConfig((prev) => {
      return [...prev, newVal];
    });
  };
  return (
    <div className="InputSelectorLeftBarWrapper">
      InputSelectorLeftBarWrapper
      {InputTypes.map((val) => {
        return (
          <div key={uuidv4()} className="InputTypeContainer">
            <span>{val.name}</span>
            <span
              className="addBtn"
              onClick={() => {
                handleAdd(val);
              }}
            >
              <GrAddCircle />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default InputSelectorLeftBar;
