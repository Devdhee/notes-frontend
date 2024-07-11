import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 48px;
  text-align: center;
  color: var(--color-red-700);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello World</H1>
    </>
  );
}

export default App;
