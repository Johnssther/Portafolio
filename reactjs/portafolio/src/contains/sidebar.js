import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from "../redux/actions/index";
import cv from '../assets/documents/John Alejandro Hernandez Rodriguez.pdf';

function Sidebar(props) {
    const settings = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    return (
        <aside className={`sidebar ${settings.toggle && 'active-toggle'}`} >
            <header className="sidebar__header">
                <div className="sidebar__header-brand">
                    PORTAFOLIO
                </div>
                <div className="sidebar__header-icono">
                    <span className="toggle" onClick={() => dispatch(actions.settings.toggle(!settings.toggle))}>
                        <i className="fas fa-bars"></i>
                    </span>
                </div>
            </header>
            <section className="sidebar__description">
                <div className="sidebar__description-data">
                    <p className="sidebar__description-name">JOHN ALEJANDRO HERNANDEZ</p>
                    <p className="sidebar__description-job">Desarrollador de software</p>
                </div>
                <div></div>
                <div className="sidebar__description-profile">
                    <div className="sidebar__description-profile-online"></div>
                    <p>JA</p>
                </div>
                
            </section>
            <section className="sidebar__section">
                <p className="sidebar__section-menu">MENÚ</p>
                <p className="sidebar__section-textonline">{/*<i className="fas fa-signal"></i>*/} online</p>
            </section>
            <nav className="sidebar__nav">
                <ul className="sidebar__nav-list">
                    <li className="sidebar__nav-list-item">
                        <a href="none" target="_blank">
                            <div className="sidebar__nav-list-contain">
                                <div className="sidebar__nav-list-item-icon">
                                    <i className="fas fa-briefcase"></i> 
                                </div>
                                <div className="sidebar__nav-list-item-title">
                                    Portafolio
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="sidebar__nav-list-item">
                        <a href="none" target="_blank">
                            <div className="sidebar__nav-list-contain">
                                <div className="sidebar__nav-list-item-icon">
                                    <i className="fas fa-book-reader"></i> 
                                </div>
                                <div className="sidebar__nav-list-item-title">
                                    Experiencia
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="sidebar__nav-list-item">
                        <a href="none" target="_blank">
                            <div className="sidebar__nav-list-contain">
                                <div className="sidebar__nav-list-item-icon">
                                    <i className="fas fa-mobile"></i> 
                                </div>
                                <div className="sidebar__nav-list-item-title">
                                    Contacto
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="sidebar__nav-list-item">
                        <a href={cv} target="_blank">
                            <div className="sidebar__nav-list-contain">
                                <div className="sidebar__nav-list-item-icon">
                                    <i className="fas fa-file-pdf"></i> 
                                </div>
                                <div className="sidebar__nav-list-item-title">
                                    cv
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <footer className="sidebar__footer">
                
            </footer>
        </aside>
    );
}

export default Sidebar;
