import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/auth";

export default function Home() {
  const [wallet, setWallet] = useState([]);
  const { token, userName } = useContext(AuthContext);

  useEffect(() => {
    const url = "http://localhost:5000/wallet";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promisse = axios.get(url, config);
    promisse.then((res) => setWallet(res.data));
    promisse.catch((err) => console.log(err.response.status));
  }, [token]);

  let balance = 0;
  if (wallet.length > 0) {
    for (let i = 0; wallet.length > i; i++) {
      if (wallet[i].type === "entry") {
        balance += wallet[i].value;
      } else {
        balance -= wallet[i].value;
      }
    }
  }

  return (
    <>
      <HeaderHome>
        <h1>
          Olá, {userName}
          <StyledLink to="/">
            <Icon />
          </StyledLink>
        </h1>
      </HeaderHome>
      {wallet.length === 0 ? (
        <NavigateHome>
          <h1>Não há registros de entrada ou saída</h1>
        </NavigateHome>
      ) : (
        <NavigateList>
          {wallet.map((w) => (
            <div key={w._id}>
              <Date>{w.date}</Date>
              <Description>{w.description}</Description>
              <Value type={w.type}>
                {w.value.toFixed(2).replace(".", ",")}
              </Value>
            </div>
          ))}
          <Balance>
            <h1>Saldo</h1>
            <p>
              {balance <= 0
                ? "0,00"
                : `${balance.toFixed(2).replace(".", ",")}`}
            </p>
          </Balance>
        </NavigateList>
      )}

      <ContainerButtons>
        <StyledLink to="/nova-entrada">
          <button>
            <IoIosAddCircleOutline />
            <p>Nova entrada</p>
          </button>
        </StyledLink>
        <StyledLink to="/nova-saida">
          <button>
            <IoIosRemoveCircleOutline />
            <p>Nova saída</p>
          </button>
        </StyledLink>
      </ContainerButtons>
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

const NavigateList = styled.nav`
  height: 446px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px 10px 20px 10px;
  position: relative;
  div {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
  }
`;

const Date = styled.p`
  color: #c6c6c6;
  position: fixed;
`;
const Description = styled.p`
  color: #000000;
  margin-left: 50px;
  width: 100%;
`;
const Value = styled.p`
  color: ${(props) => (props.type === "entry" ? "#03ac00" : "#C70000")};
`;

const Balance = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 17px;
  justify-content: space-between;
  p {
    margin-right: 25px;
    line-height: 20px;
    color: #03ac00;
  }
  h1 {
    font-weight: 700;
    line-height: 20px;
  }
`;

const NavigateHome = styled.nav`
  height: 446px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #868686;
    margin-left: 73px;
    margin-right: 73px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13px 24px 16px 24px;

  button {
    width: 155px;
    height: 114px;
    background-color: #a328d6;
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-size: 22px;
    padding: 11px;
    font-family: "Raleway", sans-serif;
    text-align: left;
  }
  p {
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    width: 64px;
    margin-top: 32px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
