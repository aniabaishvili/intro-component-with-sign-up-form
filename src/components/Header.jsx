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
    padding:10px;
  }
`;
