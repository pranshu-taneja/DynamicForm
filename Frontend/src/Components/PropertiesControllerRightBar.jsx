import React from "react";
import "./Styles/PropertiesControllerRightBar.css";
function PropertiesControllerRightBar({visibility}) {
  return (
    <div hidden={visibility} className="PropertiesControllerRightBar">
      PropertiesControllerSidebar
    </div>
  );
}

export default PropertiesControllerRightBar;
