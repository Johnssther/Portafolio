import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../redux/actions/index";

import './header.css';

const Header = () => {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <nav className="nav">
        Aplicación de Tareas
      </nav>
    </div>
  );
}

export default Header;