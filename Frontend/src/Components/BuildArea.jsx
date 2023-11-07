import React, { useState, useEffect } from "react";
import "./Styles/BuildArea.css";
import { TextInput, DropDown, RadioButton } from "../Utils/TypeConstants";
import { AiFillSetting } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import PropertiesControllerRightBar from "./PropertiesControllerRightBar";


function RenderCoreElement(name, type, properties) {
  switch (type) {
    case TextInput: {
      return (
        <div className="TextInput">
          <label htmlFor="TextInputID">{properties.label}</label>
          <input type="text" id="TextInputID" placeholder={properties.placeholder} />
        </div>
      );
    }
    case DropDown: {
      return (
        <div className="DropDown">
          <label htmlFor="DropDownID">{properties.label}</label>
          <select name="DropDown" id="DropDownID">
            {properties.options.map((val, index) => {
              return (
                <option key={index} value={val}>{val}</option>
              )
            })}
          </select>
        </div>
      );
    }
    case RadioButton: {
      return (
        <div className="RadioButton">
          <p>{properties.question}</p>
          {properties.options.map((val, index) => {
            return (
              <div key={index}>
                <input type="radio" id={val} name="RadioBtn" value={val} />
                <label htmlFor={val}>{val}</label><br />
              </div>
            )
          })}
        </div>
      )
    }
  }
}


function BuildArea({ FormConfig, setFormConfig }) {

  const [propertyVisibility, setPropertyVisibility] = useState(false)
  return (
    <div className="BuildAreaWrapper">
      <div className="FormArea">
        {FormConfig.map((data, index) => {
          const { name, type, properties } = data;
          return (
            <div key={index} className="InputElementWrapper">
              <div className="CoreElement">
                {RenderCoreElement(name, type, properties)}
              </div>
              <div className="handleConfig">
                <span onClick={() => {
                  setPropertyVisibility(!propertyVisibility)
                }}><AiFillSetting size={"1.5rem"} /></span>
                <span><MdDelete size={"1.5rem"} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <PropertiesControllerRightBar visibility={propertyVisibility} />
    </div>
  );
}

export default BuildArea;
