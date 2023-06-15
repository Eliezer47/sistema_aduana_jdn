import React, { useState } from "react";
import { Button, Table, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import css from "./Archivo.module.css";

type Registro = {
  codigo: string;
  descripcion: string;
};

enum ModoFormulario {
  Nuevo,
  Editar,
  Ninguno,
}

export const TiposInventario = () => {
  const [modo, setModo] = useState(ModoFormulario.Ninguno);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const limpiarFormulario = () => {
    setCodigo("");
    setDescripcion("");
  };

  const nuevoRegistro = () => {
    setModo(ModoFormulario.Nuevo);
    limpiarFormulario();
  };

  const editarRegistro = (registro: Registro) => {
    setModo(ModoFormulario.Editar);
    setCodigo(registro.codigo);
    setDescripcion(registro.descripcion);
  };

  const guardarRegistro = () => {
    if (modo === ModoFormulario.Nuevo) {
      const nuevoRegistro: Registro = { codigo, descripcion };
      setRegistros([...registros, nuevoRegistro]);
    } else if (modo === ModoFormulario.Editar) {
      const registroEditado: Registro = { codigo, descripcion };
      const nuevosRegistros = registros.map((registro) =>
        registro.codigo === codigo ? registroEditado : registro
      );
      setRegistros(nuevosRegistros);
    }

    setModo(ModoFormulario.Ninguno);
    limpiarFormulario();
  };

  const cancelarEdicion = () => {
    setModo(ModoFormulario.Ninguno);
    limpiarFormulario();
  };

  const eliminarRegistro = (registro: Registro) => {
    const nuevosRegistros = registros.filter(
      (r) => r.codigo !== registro.codigo
    );
    setRegistros(nuevosRegistros);
  };

  return (
    <Container className="mt-4">
      <h3 className={css.Brothers}>Tipos de Inventario</h3>
      <Container className="d-flex ">
        <div>
          <Form>
            <div className="row">
              <div className="col">
                <Form.Group controlId="codigo">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    disabled={modo === ModoFormulario.Ninguno}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    disabled={modo === ModoFormulario.Ninguno}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>

        <div className={css.buttonsArchivo}>
          <Button
            variant="success"
            onClick={guardarRegistro}
            disabled={
              modo === ModoFormulario.Ninguno ||
              (modo === ModoFormulario.Editar && !codigo)
            }
          >
            <i className="bi bi-save-fill">{"\n"}</i>Guardar
          </Button>{" "}
          <Button
            variant="danger"
            onClick={cancelarEdicion}
            disabled={modo === ModoFormulario.Ninguno}
          >
            <i className="bi bi-x-octagon-fill">{"\n"}</i>
            Cancelar
          </Button>{" "}
          <Button variant="info" onClick={nuevoRegistro}>
            <i className="bi bi-plus-circle" />
            {"\n"}Nuevo
          </Button>{" "}
          <Button variant="success" onClick={() => {}}>
            <i className="bi bi-file-earmark-spreadsheet"></i> Imprimir
          </Button>
        </div>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.codigo}</td>
              <td>{registro.descripcion}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => editarRegistro(registro)}
                  disabled={modo !== ModoFormulario.Ninguno}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => eliminarRegistro(registro)}
                  disabled={modo !== ModoFormulario.Ninguno}
                >
                  Eliminar
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
