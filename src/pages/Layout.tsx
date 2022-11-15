import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/Header";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <div>{children}</div>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: auto;
  background-color: #f5f5f5;
`;
