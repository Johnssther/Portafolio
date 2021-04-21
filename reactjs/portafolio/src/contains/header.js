import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from "../redux/actions/index";

function Header() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <header className="header">
        <div className="header__brand">
            <div>
              PORTAFOLIO
          </div>
          <div className="sidebar__header-icono" style={{color:'#313131'}}>
            <span className="toggle" onClick={() => dispatch(actions.settings.toggle(!settings.toggle))}>
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
    </header>
  );
}

export default Header;
