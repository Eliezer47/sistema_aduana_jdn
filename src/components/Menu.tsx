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
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Nav.Item className="nav-item">
        <NavDropdown title="Archivo" className="nav-link">
          <NavDropdown.Item>Aduanas</NavDropdown.Item>
          <NavDropdown.Item>Rubros</NavDropdown.Item>
          <NavDropdown.Item>Clientes</NavDropdown.Item>
          <NavDropdown.Item>Proveedores</NavDropdown.Item>
          <NavDropdown.Item>Paises</NavDropdown.Item>
          <NavDropdown.Item>Tipos de inventarios</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Operaciones" className="nav-link">
          <NavDropdown.Item>Poliza de importaciones</NavDropdown.Item>
          <NavDropdown.Item>Poliza de exportaciones</NavDropdown.Item>
          <NavDropdown.Item>Documentos anulados</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Informes" className="nav-link">
          <NavDropdown.Item>Control de calidad importaciones</NavDropdown.Item>
          <NavDropdown.Item>Control de calidad exportaciones</NavDropdown.Item>
          <NavDropdown.Item>
            Estado de cuenta por poliza y rubro
          </NavDropdown.Item>
          <NavDropdown.Item>Estado de cuenta por Rubros</NavDropdown.Item>
          <NavDropdown.Item>Listado de polizas de exportacion</NavDropdown.Item>
          <NavDropdown.Item>Listado de polizas de importacion</NavDropdown.Item>
          <NavDropdown.Item>Estado de polizas</NavDropdown.Item>
          <NavDropdown.Item>Saldo existencial mensual</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <NavDropdown title="Herramientas" className="nav-link">
          <NavDropdown.Item>Permisos y usuarios</NavDropdown.Item>
          <NavDropdown.Item>Cerrar poliza</NavDropdown.Item>
          <NavDropdown.Item>Liberar poliza</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Button variant="danger" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </Nav>
  );
};

export default NavigationMenu;
