import styled from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

function NotePreviewcard() {
  return <StyledCard>LFG</StyledCard>;
}

export default NotePreviewcard;
