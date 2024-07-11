import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.4rem 2.8rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: var(--color-grey-600);
    border: 1px solid transparent;

    &:hover {
      background-color: var(--color-grey-600);
      border: 1px solid var(--color-grey-100);
    }
  `,
  secondary: css`
    color: var(--color-grey-50);
    background: transparent;
    border: 1px solid var(--color-grey-100);

    &:hover {
      background-color: var(--color-grey-50);
      color: var(--color-grey-600);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

interface ButtonProps {
  size?: keyof typeof sizes;
  variation?: keyof typeof variations;
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.variation || "primary"]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
