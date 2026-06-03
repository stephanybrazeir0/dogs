import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }
  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <Input label="Usuário" type="text" name={username} />
        <Input label="Senha" type="password" name={password} />
        <Button disabled>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
