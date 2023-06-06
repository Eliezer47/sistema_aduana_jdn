import { Button, Container } from "react-bootstrap";
import css from "./Archivo.module.css";
export function Provedores() {
  return (
    <Container>
      <h3 className={css.Brothers}>Proveedores</h3>
      <div>
        <Button>Nuevo</Button>
        <Button>Editar</Button>
        <Button>Cancelar</Button>
        <Button>Guardar</Button>
      </div>
    </Container>
  );
}
