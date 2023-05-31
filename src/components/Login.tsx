import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Lógica de autenticación
    if (username === "" && password === "") {
      // Iniciar sesión exitosa
      console.log("Inicio de sesión exitoso");
      navigate("/menu");
    } else {
      // Credenciales incorrectas
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-50">
        <div className="w-60">
          <div className="text-center mb-4">
            <img
              src="https://casadelpuro.com/wp-content/uploads/2022/04/joya-de-nicaragua-min-2.jpg"
              alt="Logo"
              className="img-fluid w-50"
            />
            <h1 className="">Sistema de Aduana</h1>
          </div>
          <h2 className="mb-4">Iniciar sesión</h2>
          <Form className="">
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button
              type="button"
              className="btn btn-primary btn-lg mt-4 w-100"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
