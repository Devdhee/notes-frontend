import styled from "styled-components";
import NotePreviewcard from "../Components/NotePreviewcard";

const NotesPreviewContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;

function Dashboard() {
  return (
    <NotesPreviewContainer>
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
      <NotePreviewcard />
    </NotesPreviewContainer>
  );
}

export default Dashboard;
