import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import BuildForm from "./Pages/BuildForm";
import Preview from "./Pages/Preview";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<BuildForm />}></Route>
          <Route path="/Buildform" exact element={<BuildForm />}></Route>
          <Route path="/Preview" exact element={<Preview />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
