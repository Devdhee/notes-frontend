import styled from "styled-components";

const StyledLogo = styled.a`
  font-size: 2.5rem;
  color: var(--color-grey-600);
  font-weight: 600;
  font-family: "Playwrite FR Trad", cursive;
  font-optical-sizing: auto;
`;
function Logo() {
  return <StyledLogo href="/"> Notes.</StyledLogo>;
}

export default Logo;
