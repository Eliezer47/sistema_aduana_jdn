import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import css from "./Login.module.css";

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
      navigate("/*");
    } else {
      // Credenciales incorrectas
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <section className={css.Background} style={{ backgroundColor: "#a20b35" }}>
      <div className=" py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-8">
            <div className="card" style={{ borderRadius: 16 }}>
              <div className="row g-0">
                <div className={css.Portada}>
                  <img
                    src={require("../assets/Images/Portada2.jpg")}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: 16 }}
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <img
                          src={require("../assets/Images/Logo.png")}
                          alt="login form"
                          className="img-fluid mx-auto d-block "
                          style={{
                            borderRadius: 16,
                            width: "40%",
                            height: "40%",
                          }}
                        />
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{
                          letterSpacing: "1px",
                          textAlign: "center",
                          fontFamily: `${css.Brothers}`,
                          fontWeight: "bold",
                        }}
                      >
                        SISTEMA DE ADUANA JOYA DE NICARAGUA
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Usuario
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Contraseña
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleLogin}
                        >
                          Iniciar Sesion
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Olvido su contraseña?
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
