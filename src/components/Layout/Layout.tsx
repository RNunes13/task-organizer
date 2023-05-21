import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/Container";
import { Main } from "./Layout.styles";

export const Layout: FC = () => {
  return (
    <>
      <Header/>
      <Main>
        <Container data-testid="layout-container">
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </>
  );
};
