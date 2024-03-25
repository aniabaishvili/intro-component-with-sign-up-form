import styled from "styled-components";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import { Global } from "./Globals";

function App() {
  return (
    <>
      <Maincontainer>
        <Global />
        <Header></Header>
        <SignUp></SignUp>
      </Maincontainer>
    </>
  );
}

export default App;

const Maincontainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    column-gap: 70px;
  }
  @media screen and (min-width: 980px) {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
  }
`;
