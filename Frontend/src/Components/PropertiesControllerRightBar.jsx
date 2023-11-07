import React, { useState } from "react";
import "./Styles/PropertiesControllerRightBar.css";
import { MdRemoveCircleOutline } from "react-icons/md"
import { TextInput, DropDown, RadioButton } from "../Utils/TypeConstants";

function PropertiesControllerRightBar({ activePropertyIndex, FormConfig, setFormConfig }) {
  const type = FormConfig[activePropertyIndex]?.type;
  const activeProperty = FormConfig[activePropertyIndex]?.properties;
  const name = FormConfig[activePropertyIndex]?.name;
  const [tempOptionInput, setTempOptionInput] = useState("")    //for temporary storing OptionsInput

  //------------------- Controller Functions -------------------
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
  const handleAddOptions = () => {
    setFormConfig((prevFormConfig) => {
      const copyFormConfig = [...prevFormConfig];
      const updatedOptions = [...copyFormConfig[activePropertyIndex].properties.options];
      updatedOptions.push(tempOptionInput);
      copyFormConfig[activePropertyIndex].properties.options = updatedOptions;
      return copyFormConfig;
    })
    setTempOptionInput("");
  }

  const handleDeleteOption = (index) => {
    setFormConfig((prevFormConfig) => {
      // Be carefull while updating nested objects in handleController functions as they get affected by shallow copy and deep copy accordingly. And your updation a lot often depends on the copyFormConfig so copy accordingly.
      const copyFormConfig = JSON.parse(JSON.stringify(prevFormConfig));
      copyFormConfig[activePropertyIndex].properties.options.splice(index, 1)
      return copyFormConfig;
    })
  }
  //------------------- Controller Functions -------------------

  function RenderControllers() {
    switch (type) {
      case TextInput: {
        return (
          <div className="PropertyControllerContainer">

            <section className="TextInputName">
              <h2>{name}</h2>
            </section>

            <section className="controller changePlaceholder">
              <label htmlFor="placeholder">Placeholder</label>
              <input
                id="placeholder"
                type="text"
                value={activeProperty.placeholder}
                placeholder={activeProperty.placeholder}
                onChange={(e) => {
                  handlePlaceHolder(e);
                }}
              />
            </section>

            <section className="controller changeLabel">
              <label htmlFor="label">Label</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </section>
          </div>
        );
      }
      case DropDown: {
        return (
          // Important TO NOTE: TO create a InputType here for properties, make sure the Topmost div has a class "PropertyControllerContainer"
          // And each nested controller container has a className has at least one class as "controller". which will evenually contain lable and more accordingly and by default will have flex-direction as column
          <div className="PropertyControllerContainer">
            <section className="DropDownName">
              <h2>{name}</h2>
            </section>

            <section className="controller changeLabel">
              <label htmlFor="label">Label</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </section>

            <section className="controller changeDropDownOptions">
              <label htmlFor="optionsPropertyLabel">Options</label>

              <div className="addOptionByInput">
                <input
                  type="text"
                  value={tempOptionInput}
                  onChange={(e) => {
                    setTempOptionInput(() => { return e.target.value })
                  }}
                  id="optionsPropertyLabel"
                />
                <button onClick={handleAddOptions}>Add</button>
              </div>

              {/* Rendering Already available options */}
              <div className="controlDeleteOptionsContainer">
                {activeProperty.options.map((option, index) => {
                  return (
                    <div key={index} className="controlSingleDelete">
                      {option}
                      <MdRemoveCircleOutline onClick={() => { handleDeleteOption(index) }} size={20} />
                    </div>
                  )
                })}
              </div>
            </section>

          </div>
        );
      }
      case RadioButton: {
        return (
          <div className="PropertyControllerContainer">

            <section className="RadioButtonName">
              <h2>{name}</h2>
            </section>

            <section className="controller changeLabel">
              <label htmlFor="label">Question</label>
              <input
                id="label"
                type="text"
                value={activeProperty.label}
                onChange={(e) => {
                  handleLabel(e);
                }}
              />
            </section>

            <section className="controller changeRadioButtonOptions">
              <label htmlFor="optionsPropertyLabel">Options</label>

              <div className="addOptionByInput">
                <input
                  type="text"
                  value={tempOptionInput}
                  onChange={(e) => {
                    setTempOptionInput(() => { return e.target.value })
                  }}
                  id="optionsPropertyLabel"
                />
                <button onClick={handleAddOptions}>Add</button>
              </div>

              {/* Rendering Already available options */}
              <div className="controlDeleteOptionsContainer">
                {activeProperty.options.map((option, index) => {
                  return (
                    <div key={index} className="controlSingleDelete">
                      {option}
                      <MdRemoveCircleOutline onClick={() => { handleDeleteOption(index) }} size={20} />
                    </div>
                  )
                })}
              </div>
            </section>

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
