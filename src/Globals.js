import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import mobileBg from "./../public/images/bg-intro-mobile.png";
import desktopBg from './../public/images/bg-intro-desktop.png'

const Global = createGlobalStyle`
    *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;

    }

    body{
       background: #FF7979;
        background-image: url(${mobileBg});
        background-size: cover;
        font-family: 'Poppins';
        padding: 16px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 980px) {
            background-image: url(${desktopBg});
  }
    }
    
`;

export { Global };
