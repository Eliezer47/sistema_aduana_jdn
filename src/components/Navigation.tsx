import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Rubros from "./Archivo/Rubros";
import Aduana from "./Archivo/Aduana";
import Clientes from "./Archivo/Clientes";
import Provedores from "./Archivo/Provedores";
import TiposInventario from "./Archivo/TiposInventario";
import Paises from "./Archivo/Paises";
import Polizaimportaciones from "./Operaciones/PolizaImportaciones";
import DocumentosAnulados from "./Operaciones/DocumentosAnulados";
import Polizaexportaciones from "./Operaciones/PolizaExportacion";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aduana" element={<Aduana />} />
        <Route path="/rubros" element={<Rubros />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/provedores" element={<Provedores />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/tiposInventario" element={<TiposInventario />} />
        <Route path="/polizasimportacion" element={<Polizaimportaciones />} />
        <Route path="/polizasexportacion" element={<Polizaexportaciones />} />
        <Route path="/documentosanulados" element={<DocumentosAnulados />} />
      </Routes>
    </BrowserRouter>
  );
}
