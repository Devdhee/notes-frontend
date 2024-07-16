import styled, { keyframes } from "styled-components";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Rows.svg";
import Logo from "../Components/Logo";

const Container = styled.section`
  width: 100vw;
  height: 100dvh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SlideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
   100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ScaleUp = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 1rem;
  max-width: 140rem;
  margin: 0 auto 10rem;

  @media (max-width: 768px) {
    padding: 5rem 1rem;
    margin: 0 auto 7rem;
  }

  @media (max-width: 475px) {
    padding: 3rem 1rem;
    margin: 0 auto 5rem;
  }
`;

const HeroContainer = styled.div`
  padding: 2rem;
  max-width: 140rem;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
  animation: ${SlideInLeft} 1s ease-in-out forwards;

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
  animation: ${SlideInRight} 0.8s ease-in forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 1.8rem;
  }
`;

const HeroCTA = styled.span`
  animation: ${ScaleUp} 1s ease-in-out forwards;
  display: inline-block;
`;

function Home() {
  return (
    <Container>
      <NavBar>
        <Logo />
        <Link to="/login">
          <Button variation="secondary">Login</Button>
        </Link>
      </NavBar>
      <HeroContainer>
        <HeroText>Streamline your thoughts, Amplify your productivity</HeroText>
        <HeroSubtext>
          Whether you’re at work, school, or home, keep everything in one place
          and boost your productivity.
        </HeroSubtext>

        <HeroCTA>
          <Link to="/dashboard">
            <Button variation="primary" size="large">
              Get Started
            </Button>
          </Link>
        </HeroCTA>
      </HeroContainer>
    </Container>
  );
}

export default Home;
