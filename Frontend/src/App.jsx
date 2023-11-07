import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BuildForm from "./Pages/BuildForm";
import Preview from "./Pages/Preview";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<BuildForm />}></Route>
          <Route path="/Buildform" exact element={<BuildForm />}></Route>
          <Route path="/Preview" exact element={<Preview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
