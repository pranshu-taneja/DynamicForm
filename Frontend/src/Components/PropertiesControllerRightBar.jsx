import React, { useState } from "react";
import "./Styles/PropertiesControllerRightBar.css";
import { TextInput, DropDown, RadioButton } from "../Utils/TypeConstants";

function PropertiesControllerRightBar({ activePropertyIndex, FormConfig, setFormConfig }) {
  const type = FormConfig[activePropertyIndex]?.type;
  const activeProperty = FormConfig[activePropertyIndex]?.properties;
  const name = FormConfig[activePropertyIndex]?.name;

  const handlePlaceHolder = (e) => {
    setFormConfig((prevFormConfig) => {
      const copyFormConfig = [...prevFormConfig];
      copyFormConfig[activePropertyIndex].properties = {
        ...activeProperty,
        placeholder: e.target.value,
      };
      return copyFormConfig;
    });
  };

  const handleLabel = (e) => {
    setFormConfig((prevFormConfig) => {
      const copyFormConfig = [...prevFormConfig];
      copyFormConfig[activePropertyIndex].properties = {
        ...activeProperty,
        label: e.target.value,
      };
      return copyFormConfig;
    })
  }

  function RenderControllers() {
    switch (type) {
      case TextInput: {
        return (
          <div>
            <p>{name}</p>
            <div className="changePlaceholder">
              <label htmlFor="placeholder">Placeholder:</label>
              <input
                id="placeholder"
                type="text"
                value={activeProperty.placeholder}
                placeholder={activeProperty.placeholder}
                onChange={(e) => {
                  handlePlaceHolder(e);
                }}
              />
            </div>
            <div className="changeLabel">
              <label htmlFor="label">Label</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </div>
          </div>
        );
      }
      case DropDown: {
        return (
          <div>
            <p>{name}</p>
            <div className="changeLabel">
              <label htmlFor="label">Label</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </div>
          </div>
        );
      }
      case RadioButton: {
        return (
          <div>
            <p>{name}</p>
            <div className="changeLabel">
              <label htmlFor="label">Label</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </div>
          </div>
        );
      }
    }
  }

  return (
    <div className="PropertiesControllerRightBar">
      {RenderControllers()}
    </div>
  );
}

export default PropertiesControllerRightBar;
