import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

export default function Home() {
  return (
    <>
      <HeaderHome>
        <h1>
          Olá, Fulano <Icon />
        </h1>
      </HeaderHome>
      <NavigateHome>
        <h1>Não há registros de entrada ou saída</h1>
      </NavigateHome>
      <ContainerButtons>
        <button>
          <IoIosAddCircleOutline />
          <p>Nova entrada</p>
        </button>
        <button>
          <IoIosRemoveCircleOutline />
          <p>Nova saída</p>
        </button>
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
