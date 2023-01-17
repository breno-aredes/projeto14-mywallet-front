import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NewOutput() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <>
      <HeaderHome>
        <h1>
          Nova saída
          <StyledLink to="/home">
            <Icon />
          </StyledLink>
        </h1>
      </HeaderHome>
      <BodyEntry>
        <form>
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
          <Button type="submit">Salvar saída</Button>
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
