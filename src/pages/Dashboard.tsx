import styled from "styled-components";
import Tets from "../Components/Test";

const NotesPreviewContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
  }

  @media (max-width: 475px) {
    flex-direction: column;
    gap: 0rem;
    width: 100%;
  }
`;

function Dashboard() {
  return (
    <NotesPreviewContainer>
      <Tets />
    </NotesPreviewContainer>
  );
}

export default Dashboard;
