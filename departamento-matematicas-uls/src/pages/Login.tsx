import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    /* funcion que se ejecuta cuando se envia el formulario */
    e.preventDefault();
    try {
      const resultado = await supabaseCliente.auth.signInWithPassword({
        /* Logeas solo con user y password */ email,
        password,
      });
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
