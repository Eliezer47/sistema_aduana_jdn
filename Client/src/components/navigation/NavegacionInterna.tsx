import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../auth/Login";
import { Aduana,Clientes,Paises,Provedores,Rubros,TiposInventario} from "../Archivo/Index";
import {Controlcalidadexportaciones,Controlcalidadimportaciones,EstadoCuentaPolizaRubro,EstadoPolizas,EstadoCuentaRubro,ListadoPolizasExportacion,SaldoMensualExistencial,ListadoPolizasImportacion,} from "../Informes/Index";
import { Polizaexportaciones, Polizaimportaciones, DocumentosAnulados} from '../Operaciones/Index';
import Menu from "./Menu";
import { CerrarPoliza, LiberarPoliza, Permisos } from "../Herramientas/Index";

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
        <Route path="/controlcalidadimportacion" element={<Controlcalidadimportaciones />} />
        <Route path="/controlcalidadexportacion" element={<Controlcalidadexportaciones />}/>
        <Route path="/estadodecuentapolizarubro" element={<EstadoCuentaPolizaRubro />}/>
        <Route path="/estadodecuentarubros" element={<EstadoCuentaRubro />} />
        <Route path="/listadopolizasexportacion" element={<ListadoPolizasExportacion />}/>
        <Route path="/listadopolizasimportacion" element={<ListadoPolizasImportacion />}/>
        <Route path="/estadopolizas" element={<EstadoPolizas />} />
        <Route path="/saldoexistencialmensual" element={<SaldoMensualExistencial />}/>
        {/* Rutas para pestaña Herramientas */}
        <Route path="/permisosusuarios" element={<Permisos />} />
        <Route path="/cerrarpoliza" element={<CerrarPoliza />} />
        <Route path="/liberarpoliza" element={<LiberarPoliza />} />
      </Routes>
    </>
  );
}
