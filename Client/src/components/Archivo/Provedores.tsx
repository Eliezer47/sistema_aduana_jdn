import { Button, Container, Form, FormGroup, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Archivo.module.css";
import { useState } from "react";
import CheckboxComponent from "../Utils/CheckBox";
export function Provedores() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <Container>
      <h3 className={css.Brothers}>Proveedores</h3>
      <div>
        <div className="row">
          <div className={`${css.buttonsProveedores} col`}>
            <Button variant="info" className="btn btn-primary mx-2">
              <i className="bi bi-plus-circle">{"\n"}</i>Nuevo
            </Button>

            <Button variant="secondary" className="btn mx-2 ">
              <i className="bi bi-pencil-square">{"\n"}</i>Editar
            </Button>
            <Button variant="danger" className="btn mx-2">
              <i className="bi bi-x-octagon-fill">{"\n"}</i> Cancelar
            </Button>
            <Button variant="success" className="btn mx-2">
              <i className="bi bi-save-fill">{"\n"}</i>Guardar
            </Button>
            <Button variant="secondary" className="btn mx-2">
              <i className="bi bi-search">{"\n"}</i>Buscar
            </Button>
            <Button variant="info" className="btn mx-2">
              <i className="bi bi-printer-fill">{"\n"}</i>Imprimir
            </Button>
          </div>
          <div className="col-4">
            <Form>
              <FormGroup>
                <Form.Select></Form.Select>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-5 pt-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                <td>Nombre del Proveedor</td>
              </tbody>
            </Table>
          </div>
          <div className="col pt-3">
            <div className="row">
              <div className="col-2">
                <div className="row">
                  <Form className="col">
                    <Form.Group className="col my-1">
                      <Form.Label className={`row ${css.textLabels}`}>
                        Nombre
                      </Form.Label>

                      <Form.Label className={`row ${css.textLabels}`}>
                        Estatus
                      </Form.Label>
                      <Form.Label className={`row ${css.textLabels}`}>
                        Clasificacion
                      </Form.Label>
                      <Form.Label className={`row ${css.textLabels}`}>
                        Pais
                      </Form.Label>
                      <Form.Label className={`row ${css.textLabels}`}>
                        Fecha y hora de registro
                      </Form.Label>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <Form className="my-1">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                  </Form>
                  <Form className="col my-1">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Select
                        placeholder="Estatus"
                        className="form-control w-75"
                      />
                    </Form.Group>
                  </Form>
                  <Form className="col my-1">
                    <div className="row">
                      <Form.Group className="col" controlId="formBasicEmail">
                        <Form.Label className={`float-end ${css.LabelDate}`}>
                          Fecha de Ingreso
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="col">
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Seleccione una fecha"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                  </Form>
                  <Form className="my-1 my-4">
                    <Form.Group controlId="formBasicEmail">
                      <CheckboxComponent />
                    </Form.Group>
                  </Form>
                  <Form className="col my-1">
                    <div className="row">
                      <Form.Group className="col" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Pais"
                          className="w-100"
                        />
                      </Form.Group>
                      <Form.Group className="col" controlId="formBasicEmail">
                        <Form.Label className={`float-end ${css.LabelDate}`}>
                          RUC
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="col">
                        <Form.Control
                          type="text"
                          placeholder="RUC"
                          className="w-100"
                        />
                      </Form.Group>
                    </div>
                  </Form>
                  <Form className="my-3">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Fecha y Hora de Registro"
                        className="w-50"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
