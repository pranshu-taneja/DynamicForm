import React, { useEffect, useState } from "react";
import InputSelectorLeftbar from "../Components/InputSelectorLeftBar.jsx";
import BuildArea from "../Components/BuildArea";
import "./Styles/BuildForm.css";
function BuildForm() {
  const [FormConfig, setFormConfig] = useState([]);

  useEffect(() => {
    function printChange() {
      console.log(FormConfig);
    }
    printChange();
  }, [FormConfig]);


  useEffect(() => {
    function FetchStoredState() {
      const fetchedState = localStorage.getItem("state")
      const state = JSON.parse(fetchedState);
      setFormConfig(state);
    }
    FetchStoredState();
  }, [])
  

  return (
    <div className="HomeWrapper">
      <InputSelectorLeftbar FormConfig={FormConfig} setFormConfig={setFormConfig} />

      <BuildArea FormConfig={FormConfig} setFormConfig={setFormConfig} />
    </div>
  );
}

export default BuildForm;
