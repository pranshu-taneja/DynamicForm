import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Styles/Preview.css"
import { TextInput, DropDown, RadioButton, TextArea, CheckBoxes } from "../Utils/TypeConstants"

function Preview() {
  const [formConfigState, setFormConfigState] = useState([])
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const navigateFormBuilder = () => {
    navigate("/")
  }

  useEffect(() => {
    function FetchStoredState() {
      const localStorageState = localStorage.getItem("state");
      if (localStorageState) {
        const parsedState = JSON.parse(localStorageState);
        setFormConfigState(parsedState);
      }
    }
    FetchStoredState();
  }, [])


  function renderFields(field, index) {
    const { type, name, properties, id } = field;
    const uniqueId = id; // Generate unique ID based on name and index


    switch (type) {
      case TextInput:
        return (
          <div key={index} className='FieldWrapper'>
            <label htmlFor={uniqueId}>{properties.label}</label>
            <input type="text" id={uniqueId} name={name} placeholder={properties.placeholder} label={properties.label} required={properties.required} onChange={(event) => {
              const updatedFormValues = { ...formData };
              updatedFormValues[uniqueId] = event.target.value;
              setFormData(updatedFormValues);
            }} />
          </div>
        )

      case TextArea:
        return (
          <div key={index} className='FieldWrapper'>
            <label htmlFor={uniqueId}>{properties.label}</label>
            <textarea id={uniqueId} name={name} placeholder={properties.placeholder} label={properties.label} required={properties.required} onChange={(event) => {
              const updatedFormValues = { ...formData };
              updatedFormValues[uniqueId] = event.target.value;
              setFormData(updatedFormValues);
            }} />
          </div>
        )

      case DropDown:
        return (
          <div key={index} className='FieldWrapper'>
            <label htmlFor={uniqueId}>{properties.label}</label>
            <select id={uniqueId} name={name} label={properties.label} required={properties.required}
              onChange={(event) => {
                const updatedFormValues = { ...formData };
                updatedFormValues[uniqueId] = event.target.value;
                setFormData(updatedFormValues);
              }}
            >
              {properties.options.map((option, ind) => (
                <option key={ind} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )

      case RadioButton:
        return (
          <div key={index} className='FieldWrapper'>
            <label>{properties.label}</label>
            {properties.options.map((option, ind) => (
              <div key={ind}>
                <input type="radio" id={uniqueId} name={name} value={option} onChange={(event) => {
                  const updatedFormValues = { ...formData };
                  updatedFormValues[uniqueId] = event.target.value;
                  setFormData(updatedFormValues);
                }} />
                <span>{option}</span>
              </div>
            ))}
          </div>
        );

      case CheckBoxes:
        return (
          <div key={index} className='FieldWrapper'>
            <label>{properties.label}</label>
            {properties.options.map((option, ind) => (
              <div key={ind}>
                <input type="checkbox" id={uniqueId} name={option} value={option}
                  onChange={(event) => {
                    const updatedFormValues = { ...formData };
                    if (event.target.checked) {
                      if (updatedFormValues[uniqueId]) {
                        updatedFormValues[uniqueId].push(event.target.value);
                      }
                      else {
                        updatedFormValues[uniqueId] = [event.target.value];
                      }
                    }
                    else {
                      if (updatedFormValues[uniqueId]) {
                        updatedFormValues[uniqueId] = updatedFormValues[uniqueId].filter((value) => { return (value != event.target.value) })
                      }
                    }
                    setFormData(updatedFormValues);
                  }} />
                <span>{option}</span>
              </div>
            ))}
          </div>
        );

    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log("FormData:", formData);

  }

  return (
    <div className='mainPreviewWrapper'>
      <div className='FormSpaceWrapper'>
        <button className='navigateBuilderBtn' onClick={navigateFormBuilder}>ChangeForm↩️</button>
        <div className="FormWrapper">
          <form onSubmit={(e) => { handleSubmit(e) }}>
            {formConfigState.map((field, index) => {
              return (
                renderFields(field, index)
              )
            })}
            <button type='submit'>SUBMIT OR PRINT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Preview
