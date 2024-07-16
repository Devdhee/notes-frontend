import styled from "styled-components";
interface JotterCardProps {
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  max-width: 30rem;
  margin: 1.5rem;
  padding: 4rem 0;
  border: 1px solid #ddd;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  font-family: "Courier New", Courier, monospace;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      var(--color-blue-700),
      var(--color-grey-500)
    );
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
    margin: 1rem;
  }

  @media (max-width: 475px) {
    padding: 0;
    width: 100%;
    max-width: 40rem;
  }
`;

const CardContent = styled.div`
  padding: 1rem 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    /* padding: 2rem 0; */
  }

  @media (max-width: 475px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-grey-500);
  text-align: center;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 1em;
  color: var(--color-grey-600);
  position: relative;
  padding: 2rem 0;
  background: linear-gradient(white 60%, #f1f1f1 60%);
  background-size: 100% 24px;
`;

const JotterCard = ({ title, description }: JotterCardProps) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default JotterCard;
