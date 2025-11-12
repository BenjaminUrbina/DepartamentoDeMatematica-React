import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
import { useAuth } from "../hooks/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }
  /* funcion que se ejecuta cuando se envia el formulario */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultado = await supabaseCliente.auth.signInWithPassword({
        email,
        password,
      });
      console.log(resultado);
      console.log("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__intro">
          <p className="login-tag">Departamento de Matemáticas ULS</p>
          <h1>Bienvenido de nuevo</h1>
          <p className="login-subtitle">
            Accede al panel administrativo para gestionar noticias, docentes y
            publicaciones del departamento.
          </p>
        </div>

        <Form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__header">
            <h2>Inicia sesión</h2>
            <p>Usa tus credenciales institucionales</p>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo institucional</Form.Label>
            <Form.Control
              type="email"
              placeholder="nombre@uls.cl"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="login-form__actions">
            <Form.Check type="checkbox" label="Recordarme" id="rememberMe" />
            <button type="button" className="login-forgot">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <Button className="login-submit" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}
