import React, { ReactDOM, useState, useEffect } from "react";
import "./Styles/BuildArea.css";
import { TextInput, DropDown, RadioButton } from "../Utils/TypeConstants";
import { AiFillSetting } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import PropertiesControllerRightBar from "./PropertiesControllerRightBar";


function RenderCoreElement(name, type, properties) {
  switch (type) {
    case TextInput: {
      return (
        <div className="TextInputCoreElement">
          <label htmlFor="TextInputID">{properties.label}</label>
          <input type="text" id="TextInputID" placeholder={properties.placeholder} />
        </div>
      );
    }
    case DropDown: {
      return (
        <div className="DropDownCoreElement">
          <label htmlFor="DropDownID">{properties.label}</label>
          <select name="DropDown" className="DropDownSelect" id="DropDownID" >
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
        <div className="RadioButtonCoreElement">
          <label htmlFor="">{properties.label}</label>
          <div className="RadioBtnOptions">
            {properties.options.map((val, index) => {
              return (
                <div key={index}>
                  <input type="radio" id={val} name="RadioBtn" value={val} />
                  <label htmlFor={val}>{val}</label><br />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}


function BuildArea({ FormConfig, setFormConfig }) {

  const [activeProperty, setActiveProperty] = useState(0);

  function handleSettingsClick(index) {
    setActiveProperty(activeProperty === index ? activeProperty : index);
  }

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
                  handleSettingsClick(index);
                }}>
                  <AiFillSetting size={"1.5rem"} />
                </span>
                <span><MdDelete size={"1.5rem"} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <PropertiesControllerRightBar FormConfig={FormConfig} setFormConfig={setFormConfig} activePropertyIndex={activeProperty} />

    </div>
  );
}

export default BuildArea;
