import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (min-width: 480px) {
    max-width: 80%;
  }
  @media (min-width: 740px) {
    max-width: 70%;
  }
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

export default Container;
