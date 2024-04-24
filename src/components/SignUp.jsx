import styled, { useTheme } from "styled-components";
import { useState } from "react";
import errorIcon from "./../../public/images/icon-error.svg";

export default function SignUp() {
  const [firstName, setFirstname] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    if (!firstName) {
      setFirstNameError(true);
    }
    if (!lastName) {
      setLastNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (email && !validateEmail(email)) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <SignStyles>
      <Price>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </Price>
      <SignForm>
        <Input
          placeholder="First name"
          onChange={(event) => {setFirstname(event.target.value);
            setFirstNameError(false);}}
          error={firstNameError}
        />
        {firstNameError && (
          <ErrorMessage> First Name cannot be empty</ErrorMessage>
        )}
        <Input
          placeholder="Last name"
          onChange={(event) => {setLastName(event.target.value);
            setLastNameError(false);}}
          error={lastNameError}
        />
        {lastNameError && (
          <ErrorMessage> last Name cannot be empty</ErrorMessage>
        )}
        <Input
          placeholder="Email Address"
          onChange={(event) => {setEmailError(event.target.value);
            setEmailError(false);}}
          error={emailError}
        />
        {emailError && <ErrorMessage> email cannot be empty</ErrorMessage>}
        <Input
          placeholder="Password"
          onChange={(event) => {setPasswordError(event.target.value);
            setPasswordError(false);}}
          error={passwordError}
        />
        {passwordError && (
          <ErrorMessage> password cannot be empty</ErrorMessage>
        )}
        <Button onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</Button>
        <Footer>
          By clicking the button, you are agreeing to our
          <span>Terms and Services</span>
        </Footer>
      </SignForm>
    </SignStyles>
  );
}

const SignForm = styled.div`
  background-color: #fff;
  width: 327px;
  box-shadow: 0px 8px 0px 0px #00000025;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  row-gap: 10px;
  margin-top: 30px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
  @media screen and (min-width: 980px) {
    width: 450px;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  padding-left: 110px;
  font-style: italic;
  @media screen and (min-width: 568px) {
    padding-left: 200px;
  }
`;

const Price = styled.h2`
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px #00000025;
  width: 327px;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.27px;
  font-weight: 700;
  color: #fff;
  padding: 10px 50px;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;

  & span {
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.27px;
    color: #fff;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
  @media screen and (min-width: 980px) {
    width: 450px;
  }
`;
export const SignStyles = styled.div``;

export const Input = styled.input`
  width: 279px;
  padding: 20px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid white")};
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
  @media screen and (min-width: 980px) {
    width: 380px;
  }
`;

export const Button = styled.button`
  background: #38cc8b;
  box-shadow: 0px -4px 0px 0px #00000017 inset;
  padding: 18px;
  color: #fff;
  width: 279px;
  border-style: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  border-radius: 10px;

  &:hover {
    background: #77e2b3;
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    width: 460px;
    font-size: 17px;
  }
  @media screen and (min-width: 980px) {
    width: 380px;
  }
`;

export const Footer = styled.footer`
  font-size: 11px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  color: #dedede;
  & span {
    color: #ff7979;
  }
  @media screen and (min-width: 1440px) {
    font-size: 13px;
  }
`;
