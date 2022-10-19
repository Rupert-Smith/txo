import React from "react";
import { Header } from "components/header";

type Props = {
  children?: React.ReactNode;
  style?: {};
};

function MainLayout({ children, style }: Props) {
  return (
    <div style={style}>
      <Header />
      {children}
    </div>
  );
}

export { MainLayout };
