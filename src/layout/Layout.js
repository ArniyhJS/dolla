import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";

import { Container } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
