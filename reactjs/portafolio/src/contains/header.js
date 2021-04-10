import React from 'react';

function Header() {
  return (
    <header className="header">
        <div className="sidebar__header-brand color-grey">
            PORTAFOLIO
        </div>
        <div className="btnToggle" style={{color:'black'}}>
            <a href="none"><i className="fas fa-bars"></i></a>
        </div>
    </header>
  );
}

export default Header;
