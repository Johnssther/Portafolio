import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Main from './main';

function Layout() {
  return (
    <>
        <Header />
        <Sidebar active={"active"} />
        <Main />
    </>
  );
}

export default Layout;
