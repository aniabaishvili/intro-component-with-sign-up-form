import styled from "styled-components";

export default function SignUp() {
  return (
    <SignStyles>
      <Price>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </Price>
      <SignForm>
       
        <Input placeholder="First name"/>
        <Input placeholder="Last name"/>
        <Input placeholder="Email Address"/>
        <Input placeholder="Password"/>
        
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

  & span {
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.27px;
    color: #fff;
  }
`;
export const SignStyles = styled.div``;

export const Input = styled.input``;
