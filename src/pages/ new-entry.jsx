import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/auth";

export default function NewEntry() {
  const [description, setDescription] = useState("");
  let [value, setValue] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  function newEntry(e) {
    e.preventDefault();

    if (value) {
      value = Number(value.replace(",", "."));
      if (isNaN(value)) return alert("valor não é um numero");
    }

    const url = "http://localhost:5000/wallet";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = { description, value, type: "entry" };

    const promisse = axios.post(url, data, config);
    promisse.then(() => navigate("/home"));
    promisse.catch("algo deus errado");
  }

  return (
    <>
      <HeaderHome>
        <h1>
          Nova entrada
          <StyledLink to="/home">
            <Icon />
          </StyledLink>
        </h1>
      </HeaderHome>
      <BodyEntry>
        <form onSubmit={newEntry}>
          <label htmlFor="value">
            <input
              id="value"
              placeholder="Valor"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            ></input>
          </label>
          <label htmlFor="description">
            <input
              id="description"
              placeholder="Descrição"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></input>
          </label>
          <Button type="submit">Salvar entrada</Button>
        </form>
      </BodyEntry>
    </>
  );
}

const HeaderHome = styled.header`
  height: 31px;
  margin: 25px 24px 22px 24px;

  h1 {
    display: flex;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const Icon = styled(AiOutlineExport)`
  font-size: 26px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
const BodyEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
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
