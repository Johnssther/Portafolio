import './header.css';

function Sidebar() {
  return (
    <aside className="sidebar" >
        <header className="sidebar__header">
            <div className="sidebar__header-brand">
                PORTAFOLIO
            </div>
            <div className="sidebar__header-icono">
                <a href="none">{/*<i className="fas fa-bars"></i>*/}</a>
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
                    <a href="none">
                        <i className="fas fa-briefcase"></i> PORTAFOLIO
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="sidebar__nav-list-item">
                    <a href="none">
                        <i className="fas fa-book-reader"></i> EXPERIENCIA
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="sidebar__nav-list-item">
                    <a href="none">
                        <i className="fas fa-mobile"></i> CONTACTO
                        <i className="fas fa-angle-right"></i>
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
