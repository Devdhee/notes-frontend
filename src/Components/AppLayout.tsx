import styled from "styled-components";

const Container = styled.div``;

const AppHeader = styled.header`
  display: flex;
`;
function AppLayout() {
  return (
    <Container>
      <AppHeader></AppHeader>
    </Container>
  );
}

export default AppLayout;
