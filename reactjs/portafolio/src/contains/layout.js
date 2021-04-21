import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Main from './main';
import Progressbar from '../components/progressbar';

function Layout() {
  return (
    <>
        <Progressbar />
        <Header />
        <Sidebar active={"active"} />
        <Main />
    </>
  );
}

export default Layout;
