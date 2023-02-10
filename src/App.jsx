import { Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./Pages/Data";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Data />} />
      </Routes>
    </div>
  );
};

export default App;
