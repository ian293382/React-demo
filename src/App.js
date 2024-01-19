import logo from "./logo.svg";
import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";

function App() {
  const [fontColor, setFontColor] = React.useState("#fff");
  // 定時 他會閃爍 1秒判別 根據fontColor 回傳
  // React.useEffect(() => {
  //   setInterval(()=> {
  //     if (fontColor === '#fff') {
  //       setFontColor('pink');
  //     } else {
  //       setFontColor('#fff');
  //     }
  //   }, 1000);
  // }, [fontColor]);
  return (
    <StyleApp>
      <StyleHeader>
        <StyleAppLogo src={logo} alt="logo" />
        <StyleP>
          Edit <code>src/App.js</code> and save to reload.
        </StyleP>
        <StyledAppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          fontColor={fontColor}
        >
          Learn React
        </StyledAppLink>
        {/* onclick 建議要包成一個物件 寫成函數如下 */}
        <StyleButton
          onClick={() => {
            if (fontColor === "#fff") {
              setFontColor("pink");
            } else {
              setFontColor("#fff");
            }
          }}
        >
          Change Color
        </StyleButton>
        <StyleButtonCool>Cool Button</StyleButtonCool>
      </StyleHeader>
    </StyleApp>
  );
}

export default App;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyleApp = styled.div`
  text-align: center;
`;

const StyleHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: "#61dafb";
`;

const StyleP = styled.p`
  color: red;
  background-color: black;
  border-radius: 25px;
  padding: 10px;
`;

const StyleAppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

const StyledAppLink = styled.a`
  ${(props) => `color: ${props.fontColor}`}// color: #61dafb;
`;

const StyleButton = styled.button`
  text-align: center;
  border-radius: 5px;
  margin-top: 30px;
  height: 40px;
`;

const StyleButtonCool = styled(StyleButton)`
  background-color: #111;
  color: white;
  border: 0px;
  height: 60px;
  width: 70px;
  transition: color 0.3s;

  &:hover {
    color: red;
    width: 270px;
  }
`;
