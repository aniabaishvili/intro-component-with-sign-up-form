import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import mobileImg from '../public/images/bg-intro-mobile.png'


const Global = createGlobalStyle`
   *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body{
   background: #FF7979;
   height: 100vh;
   background-image: url(${mobileImg});
   background-size:cover;
   font-family: 'Poppins';
  }
  
`;
 export {Global}
