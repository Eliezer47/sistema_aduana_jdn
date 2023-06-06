import React, { useState } from "react";
import { Button, Table, Form, Container } from "react-bootstrap";
import css from "./Archivo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

type Registro = {
  codigo: string;
  descripcion: string;
};

enum ModoFormulario {
  Nuevo,
  Editar,
  Ninguno,
}

export const Rubros = () => {
  const [modo, setModo] = useState(ModoFormulario.Ninguno);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  //Pendiende de agregar tipo y medida

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
      <h3 className={css.Brothers}>Rubros</h3>
      <Container className="d-flex mb-4 ">
        <div className="row">
          <Form className="col">
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
                <Form.Group controlId="codigoArancel">
                  <Form.Label>Código Arancelario</Form.Label>
                  <Form.Control
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    disabled={modo === ModoFormulario.Ninguno}
                  />
                </Form.Group>
              </div>
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
          </Form>
          <Form className="col-4">
            <div>
              <div>
                <Form.Group controlId="descripcion">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    disabled={modo === ModoFormulario.Ninguno}
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="descripcion">
                  <Form.Label>Medida</Form.Label>
                  <Form.Select
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    disabled={modo === ModoFormulario.Ninguno}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>

        <div className={css.buttonsRubros}>
          <Button
            variant="success"
            onClick={guardarRegistro}
            disabled={
              modo === ModoFormulario.Ninguno ||
              (modo === ModoFormulario.Editar && !codigo)
            }
          >
            <i className="bi bi-save-fill"></i>
            {"\n"}Guardar
          </Button>{" "}
          <Button
            variant="danger"
            onClick={cancelarEdicion}
            disabled={modo === ModoFormulario.Ninguno}
          >
            <i className="bi bi-x-octagon-fill"></i> {"\n"}Cancelar
          </Button>{" "}
          <Button variant="info" onClick={nuevoRegistro}>
            <i className="bi bi-plus-circle">{"\n"}</i>Nuevo
          </Button>{" "}
          <Button variant="secondary" onClick={() => {}}>
            <i className="bi bi-printer-fill">{"\n"}</i>Imprimir
          </Button>
        </div>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cod_Arancel</th>
            <th>Medida</th>
            <th>Tipo</th>
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
