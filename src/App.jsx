import styled from "styled-components";
import "./App.css";
import { Global } from "./Globals";

function App() {
  return (
    <>
      <Maincontainer>
      <Global />
       <Header>
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        Hello world</Header>
       <SignUp></SignUp>
      </Maincontainer>
    </>
  );
}

export default App;

const Maincontainer = styled.div``;

const Header = styled.div`
   font-size: 40px;
  
`;
const SignUp = styled.div``;