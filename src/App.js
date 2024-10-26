import "./App.css";
import About from "./Pages/About";
import LayoutWrapper from "./Layout/LayoutWrapper";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
