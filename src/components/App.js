import GlobalStyle from "../assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Registration from "../pages/ registration";
import Home from "../pages/home";
import NewEntry from "../pages/ new-entry";
import NewOutput from "../pages/new-output";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewEntry />} />
          <Route path="/nova-saida" element={<NewOutput />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
