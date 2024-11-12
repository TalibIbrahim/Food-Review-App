import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import LayoutWrapper from "./Layout/LayoutWrapper";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import AuthContext from "./Store/auth-context";
import Profile from "./Pages/Profile";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />

        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}

        <Route path="/about" element={<About />} />
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
