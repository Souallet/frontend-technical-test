import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  margin: 0.5rem;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #ec6e24;
    border-color: #ec6e24;
  }
`;

export default Card;
