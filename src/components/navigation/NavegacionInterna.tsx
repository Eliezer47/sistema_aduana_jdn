import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Aduana from "../Archivo/Aduana";
import Clientes from "../Archivo/Clientes";
import Paises from "../Archivo/Paises";
import Provedores from "../Archivo/Provedores";
import Rubros from "../Archivo/Rubros";
import TiposInventario from "../Archivo/TiposInventario";
import EstadoCuentaPolizaRubro from "../Informes/EstadoCuentaPolizaRubro";
import EstadoCuentaRubro from "../Informes/EstadoCuentaRubro";
import EstadoPolizas from "../Informes/EstadoPolizas";
import ListadoPolizasExportacion from "../Informes/ListadoPolizasExportacion";
import ListadoPolizasImportacion from "../Informes/ListadopolizasImportacion";
import SaldoMensualExistencial from "../Informes/SaldoExistencialMensual";
import Controlcalidadexportaciones from "../Informes/controlcalidadexportaciones";
import Controlcalidadimportaciones from "../Informes/controlcalidadimportaciones";
import DocumentosAnulados from "../Operaciones/DocumentosAnulados";
import Polizaexportaciones from "../Operaciones/PolizaExportacion";
import Polizaimportaciones from "../Operaciones/PolizaImportaciones";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <>
      <Menu />
      <Routes>
        {/* Rutas iniciales */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        {/* Rutas de pestaña Archivo */}
        <Route path="/aduana" element={<Aduana />} />
        <Route path="/rubros" element={<Rubros />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/provedores" element={<Provedores />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/tiposInventario" element={<TiposInventario />} />
        {/* Rutas de pestaña Operaciones */}
        <Route path="/polizasimportacion" element={<Polizaimportaciones />} />
        <Route path="/polizasexportacion" element={<Polizaexportaciones />} />
        <Route path="/documentosanulados" element={<DocumentosAnulados />} />
        {/* Rutas para la pestaña Informes */}

        <Route
          path="/controlcalidadimportacion"
          element={<Controlcalidadimportaciones />}
        />
        <Route
          path="/controlcalidadexportacion"
          element={<Controlcalidadexportaciones />}
        />
        <Route
          path="/estadodecuentapolizarubro"
          element={<EstadoCuentaPolizaRubro />}
        />
        <Route path="/estadodecuentarubros" element={<EstadoCuentaRubro />} />
        <Route
          path="/listadopolizasexportacion"
          element={<ListadoPolizasExportacion />}
        />
        <Route
          path="/listadopolizasimportacion"
          element={<ListadoPolizasImportacion />}
        />
        <Route path="/estadopolizas" element={<EstadoPolizas />} />
        <Route
          path="/saldoexistencialmensual"
          element={<SaldoMensualExistencial />}
        />

        {/* Rutas para pestaña Herramientas */}

        <Route
          path="/listadopolizasimportacion"
          element={<DocumentosAnulados />}
        />
        <Route path="/estadopolizas" element={<Polizaexportaciones />} />
        <Route
          path="/saldoexistencialmensual"
          element={<DocumentosAnulados />}
        />
      </Routes>
    </>
  );
}
