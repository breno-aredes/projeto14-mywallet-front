import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const url = "http://localhost:5000/login";
    const data = { email, password };

    const promisse = axios.post(url, data);
    promisse.then(() => navigate("/home"));
    promisse.catch((err) => alert(err.response.data));
  }

  return (
    <BodyHome>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <Button type="submit">Entrar</Button>
      </form>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </BodyHome>
  );
}

const BodyHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    height: 58px;
    width: 326px;
    margin-bottom: 13px;
    border: 1px solid #d4d4d4;
    padding-left: 11px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: #000000;
  }
  input::placeholder {
    color: #000000;
  }
  h1 {
    margin-top: 159px;
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    color: #ffffff;
  }
`;

const Button = styled.button`
  background-color: #a328d6;
  border: none;
  margin-bottom: 36px;
  height: 46px;
  width: 326px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
`;
