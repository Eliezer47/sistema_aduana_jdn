import { Button, Table, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Archivo.module.css";
import { useState } from "react";

export function Clientes() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <Container>
      <div>
        <h3 className={`${css.title} ${css.Brothers}`}>Clientes</h3>
        <Form className={css.searchBar}>
          <Form.Group>
            <Form.Control type="text" placeholder="Buscar..." />
          </Form.Group>
        </Form>
      </div>
      <div>
        <div className={css.buttonsClientes}>
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
          <Button variant="info" className="btn mx-2">
            <i className="bi bi-printer-fill">{"\n"}</i>Imprimir
          </Button>
          <Button variant="success" className="btn mx-2">
            <i className="bi bi-file-earmark-spreadsheet">{"\n"}</i>Exportar
          </Button>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <Form className="col">
                <Form.Group className="col my-1">
                  <Form.Label className={`row ${css.textLabels}`}>
                    Nombre
                  </Form.Label>
                  <Form.Label className={`row ${css.textLabels}`}>
                    Pais
                  </Form.Label>
                  <Form.Label className={`row ${css.textLabels}`}>
                    Estatus
                  </Form.Label>
                  <Form.Label className={`row ${css.textLabels}`}>
                    Registrado por:
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
                    placeholder="Pais"
                    className="form-control w-75"
                  />
                </Form.Group>
              </Form>

              <Form className="col my-1">
                <div className="row">
                  <Form.Group className="col" controlId="formBasicEmail">
                    <Form.Label className={`float-end ${css.LabelDate}`}>
                      Fecha
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

              <Form className="my-1">
                <Form.Group controlId="formBasicEmail">
                  <Form.Select
                    placeholder="Activo"
                    className="form-control w-25"
                  />
                </Form.Group>
              </Form>

              <Form className="col my-1">
                <div className="row">
                  <Form.Group className="col" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
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
              <Form className="my-1">
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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Clientes</th>
            </tr>
            <tbody>
              <td></td>
              <td></td>
            </tbody>
          </thead>
        </Table>
      </div>
    </Container>
  );
}
