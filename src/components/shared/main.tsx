import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.div`
  width: 100%;
`;

export default Main;
