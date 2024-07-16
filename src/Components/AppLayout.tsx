import { Outlet } from "react-router-dom";
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

const BodyContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  overflow-y: auto;
`;

const StyledMain = styled.main`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AppFooter = styled.footer`
  width: 100%;
  padding: 2rem;
  box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
  -webkit-box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
  -moz-box-shadow: -3px -3px 5px -4px rgba(74, 74, 74, 0.34);
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

          <p>Hello David</p>
        </AppHeader>
      </AppHeaderContainer>
      <BodyContainer>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </BodyContainer>
      <AppFooter>
        <p></p>
      </AppFooter>
    </Container>
  );
}

export default AppLayout;
