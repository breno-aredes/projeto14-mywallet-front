import GlobalStyle from "../assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Registration from "../pages/ registration";
import Home from "../pages/home";
import NewEntry from "../pages/ new-entry";
import NewOutput from "../pages/new-output";
import AuthContext from "../context/auth";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState({});

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewEntry />} />
          <Route path="/nova-saida" element={<NewOutput />} />
        </Routes>
      </AuthContext.Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
