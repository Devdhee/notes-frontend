import styled from "styled-components";
import TipTap from "../Components/TipTap";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TipTapWrapper = styled.div`
  border: 0.15rem solid var(--color-grey-600);
  border-radius: 1rem;
  padding: 2rem 1rem;
  margin: 2rem 0;
`;

function NewNote() {
  return (
    <Container>
      <form action="">
        <Input type="text" label="Title" name="title" required={true} />
        <TipTapWrapper>
          <TipTap />
        </TipTapWrapper>
        <Button>Save Note</Button>
      </form>
    </Container>
  );
}

export default NewNote;
