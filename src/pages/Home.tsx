import styled from "styled-components";
import Button from "../ui/Button";

const HeroContainer = styled.div`
  padding: 2rem;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: calc(100vh - 8rem);
  color: var(--color-grey-600);
`;

const HeroText = styled.h1`
  font-size: 6.5rem;
  max-width: 90rem;
  text-align: center;
  background: linear-gradient(190deg, #0369a1, #111827);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }

  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;

const HeroSubtext = styled.p`
  font-size: 2.5rem;
  max-width: 80rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 1.8rem;
  }
`;

function Home() {
  return (
    <HeroContainer>
      <HeroText>Streamline your thoughts, Amplify your productivity</HeroText>
      <HeroSubtext>
        Whether you’re at work, school, or home, keep everything in one place
        and boost your productivity.
      </HeroSubtext>
      <Button variation="primary" size="large">
        Get Started
      </Button>
    </HeroContainer>
  );
}

export default Home;
