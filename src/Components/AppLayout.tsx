import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Input from "../ui/Input";
import Logo from "./Logo";

const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: grid;
  grid-template-rows: 8rem 1fr 7rem;
  grid-template-columns: 1fr;

  @media (max-width: 768px) {
  }

  @media (max-width: 475px) {
  }
`;

const AppHeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 2rem;
  align-items: center;
  box-shadow: -3px 3px 5px -4px rgba(74, 74, 74, 0.34);
  -webkit-box-shadow: -3px 3px 5px -4px rgba(74, 74, 74, 0.34);
  -moz-box-shadow: -3px 3px 5px -4px rgba(74, 74, 74, 0.34);
`;

const AppHeader = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

const InputContainer = styled.div`
  flex: 1;
  max-width: 60rem;
`;

const WelcomeText = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-800);

  @media (max-width: 475px) {
    display: none;
  }
`;

const BodyContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  overflow-y: auto;

  @media (max-width: 475px) {
    padding: 4rem 0;
  }
`;

const StyledMain = styled.main`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AppFooter = styled.nav`
  width: 100%;
  padding: 2rem;
  box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
  -webkit-box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
  -moz-box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
`;

const NavBar = styled.ul`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    /* Small laptop */
    @media screen and (max-width: 73.75em) {
      grid-template-columns: 24rem 1fr;
    }

    /* Tablet */
    @media screen and (max-width: 69.4em) {
      grid-row: 3;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function AppLayout() {
  return (
    <Container>
      <AppHeaderContainer>
        <AppHeader>
          <Logo />
          <InputContainer>
            <Input type="text" placeholder="Search notes" />
          </InputContainer>

          <WelcomeText>Hello, David</WelcomeText>
        </AppHeader>
      </AppHeaderContainer>
      <BodyContainer>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </BodyContainer>
      <AppFooter>
        <NavBar>
          <li>
            <StyledNavLink to="/dashboard">
              {/* <HiOutlineHome /> */}
              <span>Home</span>
            </StyledNavLink>
          </li>
        </NavBar>
      </AppFooter>
    </Container>
  );
}

export default AppLayout;
