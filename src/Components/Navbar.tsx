import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const NavBarContainer = styled.div`
  width: 100%;
  background-color: var(--color-blue-700);
  z-index: 40;
`;

const StyledNavbar = styled.nav`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 140rem;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 3px;
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.4s;
  }
`;

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    padding: 4rem 2rem;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--color-blue-700);
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: left;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ddd;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContainer>
      <StyledNavbar>
        <Logo href="/">📝Notes.</Logo>
        <MenuIcon onClick={handleToggle}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink href="#">
              <Button variation="primary" size="medium">
                Signup
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <Button variation="secondary" size="medium">
              Login
            </Button>
          </NavItem>
        </NavMenu>
      </StyledNavbar>
    </NavBarContainer>
  );
}

export default Navbar;
