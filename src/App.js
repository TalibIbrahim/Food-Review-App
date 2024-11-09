import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "./Layout/LayoutWrapper";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
