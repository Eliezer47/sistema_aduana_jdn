import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import NavegacionInterna from "../components/navigation/NavegacionInterna";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Inicial */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NavegacionInterna />} />
      </Routes>
    </BrowserRouter>
  );
}
