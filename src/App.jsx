import styled from "styled-components";
import  Header from "./components/Header";
import  SignUp from "./components/SignUp";
import {Global} from "./Globals"

function App() {
  return (
    <>
      <Maincontainer>
      <Global />
       <Header>
        </Header>
       <SignUp></SignUp>
      </Maincontainer>
    </>
  );
}

export default App;

const Maincontainer = styled.div`
   
`;



