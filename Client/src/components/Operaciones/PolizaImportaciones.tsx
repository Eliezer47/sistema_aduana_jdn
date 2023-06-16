import { Button, Container, Form, Table } from "react-bootstrap";
import { useState } from "react";
import css from "./Operaciones.module.css";
import { EstadoCuentaPolizaRubro } from "../Informes/EstadoCuentaPolizaRubro";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function Polizaimportaciones() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <Container>
      {/* Buttons */}
      <div className={`${css.importsbuttons}`}>
        <Button variant="info" className="mx-3">
          <i className="bi bi-plus-circle"></i> Nuevo
        </Button>
        <Button variant="success" className="mx-3">
          <i className="bi bi-file-earmark-spreadsheet"></i> Adiciona
        </Button>
        <Button variant="success" className="mx-3">
          <i className="bi bi-pencil-square"></i> Editar
        </Button>
        <Button variant="danger" className="mx-3">
          <i className="bi bi-x-octagon"></i> Cancelar
        </Button>
        <Button variant="success" className="mx-3">
          <i className="bi bi-save-fill"></i> Guardar
        </Button>
        <Button variant="warning" className="mx-3">
          <i className="bi bi-trash"></i> Eliminar
        </Button>
        <Button variant="light" className="mx-3">
          <i className="bi bi-search"></i> Buscar
        </Button>
        <Button variant="success" className="mx-3">
          <i className="bi bi-file-earmark-spreadsheet"></i> Imprimir
        </Button>
      </div>
      <div className="row">
        {/*Seccion General */}
        <div className="col">
          {/*Seccion izquierda */}

          <div className="my-4 row flex-column">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No de Poliza</th>
                  <th>Fecha</th>
                  <th>Rubro</th>
                </tr>
              </thead>
              <tbody>
                <td>No de poliza</td>
                <td>Fecha</td>
                <td>Rubro</td>
              </tbody>
            </Table>
          </div>
          <div className="row flex-column">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No de Recepcion</th>
                  <th>Fecha de Recepcion</th>
                  <th>Entrada</th>
                  <th>Libras</th>
                </tr>
              </thead>
              <tbody>
                <td>No de recepcion</td>
                <td>Fecha de recepcion</td>
                <td>Entrada</td>
                <td>Libras</td>
              </tbody>
            </Table>
          </div>
          <div>
            <div className={`row ${css.textbox2}`}>
              <div className="col-2">
                <div className="row">
                  <Form className="col">
                    <Form.Group className="col">
                      <Form.Label className={`row ${css.textLabels}`}>
                        ABIERTA
                      </Form.Label>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <Form.Label className={`row ${css.textLabels2}`}>
                      Totales
                    </Form.Label>
                  </div>
                  <div className="col">
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Nombre" />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col">
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Nombre" />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Label className={`row ${css.textLabels}`}>
                    Registrado Por
                  </Form.Label>
                </div>
                <div className="col">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Label className={`row ${css.textLabels}`}>
                    Fecha Hora Registro
                  </Form.Label>
                </div>
                <div className="col">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Seleccione una fecha"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Label className={`row ${css.textLabels}`}>
                    Editado Por:
                  </Form.Label>
                </div>
                <div className="col">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Label className={`row ${css.textLabels}`}>
                    Fecha Hora Edicion
                  </Form.Label>
                </div>
                <div className="col">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Seleccione una fecha"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          {" "}
          {/*Seccion Derecha */}
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}
