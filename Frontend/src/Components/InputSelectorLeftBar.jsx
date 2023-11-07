// import React from "react";
// import "./Styles/InputSelectorLeftBar.css";
// import { v4 as uuidv4 } from "uuid";
// import { InputTypes } from "../Utils/InputTypeCreator";
// import { GrAddCircle } from "react-icons/gr";
// import { useNavigate } from "react-router-dom";

// function InputSelectorLeftBar({ FormConfig, setFormConfig }) {
//   const navigate = useNavigate();
//   const handleAdd = (val) => {
//     const newVal = JSON.parse(JSON.stringify(val));
//     newVal.id = uuidv4();

//     setFormConfig((prev) => {
//       return [...prev, newVal];
//     });
//   };

//   const handlePreview = () => {
//     navigate("/preview", { state: { FormConfig: FormConfig } });
//   }

//   const handleSave = () => {
//     try {
//       localStorage.setItem("state", JSON.stringify(FormConfig))
//       alert("Form Config stored Successfully")
//     }
//     catch (err) {
//       alert("Error while storing Form Configs to LocalStorage");
//       console.error(err);
//     }
//   }
//   return (
//     <div className="InputSelectorLeftBarWrapper">
//       <div className="previewSave">
//         <button className="SaveButton" onClick={handleSave}>Save</button>
//         <button className="PreviewButton" onClick={handlePreview}>Preview↗️</button>
//         <button className="importData">Import</button>
//         <button className="exportData">Export</button>
//       </div>
//       {InputTypes.map((val) => {
//         return (
//           <div key={uuidv4()} className="InputTypeContainer">
//             <span>{val.name}</span>
//             <span
//               className="addBtn"
//               onClick={() => {
//                 handleAdd(val);
//               }}
//             >
//               <GrAddCircle />
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default InputSelectorLeftBar;



import React from "react";
import "./Styles/InputSelectorLeftBar.css";
import { v4 as uuidv4 } from "uuid";
import { InputTypes } from "../Utils/InputTypeCreator";
import { GrAddCircle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function InputSelectorLeftBar({ FormConfig, setFormConfig }) {
  const navigate = useNavigate();

  const handleAdd = (val) => {
    const newVal = { ...val, id: uuidv4() };

    setFormConfig((prev) => {
      return [...prev, newVal];
    });
  };

  const handlePreview = () => {
    navigate("/preview", { state: { FormConfig: FormConfig } });
  };

  const handleSave = () => {
    try {
      localStorage.setItem("state", JSON.stringify(FormConfig));
      alert("Form Config stored Successfully");
    } catch (err) {
      alert("Error while storing Form Configs to LocalStorage");
      console.error(err);
    }
  };

  const handleExport = () => {
    const data = JSON.stringify(FormConfig);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formConfig.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      const importedData = JSON.parse(content);
      setFormConfig(importedData);
    };

    reader.readAsText(file);
  };

  return (
    <div className="InputSelectorLeftBarWrapper">
      <div className="previewSave">
        <button className="SaveButton" onClick={handleSave}>
          Save
        </button>
        <button className="PreviewButton" onClick={handlePreview}>
          Preview↗️
        </button>
        <input
          type="file"
          className="importData"
          onChange={handleImport}
          accept=".json"
        />
        <button className="exportData" onClick={handleExport}>
          Export
        </button>
      </div>
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
