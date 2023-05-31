import React from "react";
import { Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Lógica para cerrar sesión
    // ...
    navigate("/login");
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <Nav.Item className="nav-item">
        <NavDropdown title="Archivo" className="nav-link">
          <NavDropdown.Item onClick={() => navigate("/aduana")}>
            Aduanas
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/rubros")}>
            Rubros
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/clientes")}>
            Clientes
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/provedores")}>
            Proveedores
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/paises")}>
            Paises
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/TiposInventario")}>
            Tipos de inventarios
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Operaciones" className="nav-link">
          <NavDropdown.Item onClick={() => navigate("/polizasimportacion")}>
            Poliza de importaciones
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/polizasexportacion")}>
            Poliza de exportaciones
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/documentosanulados")}>
            Documentos anulados
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Informes" className="nav-link">
          <NavDropdown.Item
            onClick={() => navigate("/controlcalidadimportacion")}
          >
            Control de calidad importaciones
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/controlcalidadexportacion")}
          >
            Control de calidad exportaciones
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/estadodecuentapolizarubro")}
          >
            Estado de cuenta por poliza y rubro
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/estadodecuentarubros")}>
            Estado de cuenta por Rubros
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/listadopolizasexportacion")}
          >
            Listado de polizas de exportacion
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/listadopolizasimportacion")}
          >
            Listado de polizas de importacion
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/estadopolizas")}>
            Estado de polizas
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/saldoexistencialmensual")}
          >
            Saldo existencial mensual
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Herramientas" className="nav-link">
          <NavDropdown.Item
            onClick={() => navigate("/controlcalidadimportacion")}
          >
            Permisos y usuarios
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/controlcalidadimportacion")}
          >
            Cerrar poliza
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => navigate("/controlcalidadimportacion")}
          >
            Liberar poliza
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <div className=" navbar-collapse collapse order-3 dual-collapse2 w-100 d-flex justify-content-end">
        <Button variant="danger" onClick={handleLogout} className="btn">
          Cerrar sesión
        </Button>
      </div>
    </Nav>
  );
};

export default NavigationMenu;
