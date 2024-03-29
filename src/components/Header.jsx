import styled from "styled-components";

export default function Header() {
  return (
    <Headerstyle>
      <h1>Learn to code by wathing others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </Headerstyle>
  );
}

export const Headerstyle = styled.div`
  width: 327px;

  & h1 {
    font-size: 25px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.2916666865348816px;
    text-align: center;
    color: #fff;
    padding: 0px 10px;
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
    padding: 10px;
  }
  @media screen and (min-width: 1440px) {
    h1 {
      font-size: 50px;
      text-align: start;
      line-height:50px;
    }
    width:500px;
    margin: auto;
    
    p{
        font-size: 16px;
        text-align: start;
        line-height:30px;
       
    }
}

@media screen and (min-width:980px){
    h1{
        font-size:40px;
        text-align:start;

    }

    p{
        font-size:14px;
        text-align: start;

    }
    width:400px;
    margin:auto;
}
`;
