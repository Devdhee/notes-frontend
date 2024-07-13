import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  max-width: 140rem;
  margin: 0 auto;
`;

function Navbar() {
  return (
    <StyledContainer>
      <NavBar>HI</NavBar>
    </StyledContainer>
  );
}

export default Navbar;
