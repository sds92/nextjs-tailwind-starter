import React from 'react';
import { Footer, Header } from 'components';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={`grow`}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
