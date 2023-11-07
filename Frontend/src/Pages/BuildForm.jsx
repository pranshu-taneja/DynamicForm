import React, { useEffect, useState } from "react";
import InputSelectorLeftbar from "../Components/InputSelectorLeftbar";
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

  return (
    <div className="HomeWrapper">
      <InputSelectorLeftbar setFormConfig={setFormConfig} />

      <BuildArea FormConfig={FormConfig} setFormConfig={setFormConfig} />
    </div>
  );
}

export default BuildForm;
