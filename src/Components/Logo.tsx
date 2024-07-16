import styled from "styled-components";

const StyledLogo = styled.a`
  font-size: 2.5rem;
  color: var(--color-grey-600);
  font-weight: 600;
  font-family: "Playwrite FR Trad", cursive;
  font-optical-sizing: auto;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 475px) {
    font-size: 1.8rem;
  }
`;
function Logo() {
  return <StyledLogo href="/"> Notes.</StyledLogo>;
}

export default Logo;
