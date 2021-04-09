import './header.css';
import Sidebar from './sidebar'
import ProgressbarLinear from './progressbar'
import Header from './header'

import img_laravel from '../assets/img/logos/laravel.svg';
import img_reactjs from '../assets/img/logos/reactjs.svg';
import img_redux from '../assets/img/logos/redux.svg';

import movie_line from '../assets/movies/Line - 1280x720.mp4';


function Index() {
  return (
    <div>
        <ProgressbarLinear />
        <Sidebar />
        <Header />

        <section className="section" id="wrapper">
            <div className="container">
                <div className="section__header">
                    
                    <video autoPlay loop muted src={movie_line}></video>
                    <p>ALEJANDRO HERNÁNDEZ</p>
                </div>
                <div className="section__portafolio">
                    <p>Herramientas</p>
                    <div className="section__portafolio-cards">
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                                <img src={img_reactjs} alt="reactjs"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                React
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                            <img src={img_laravel} alt="laravel"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                Redux
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                                <img src={img_redux} alt="redux"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                Laravel
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                    </div>
                    <div className="section__portafolio-cards">
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                                <img src={img_laravel} alt="laravel"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                Redux
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                                <img src={img_laravel} alt="laravel"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                Laravel
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                        <div className="section__portafolio-cards-card">
                            <div className="section__portafolio-cards-card-header">
                                <img src={img_redux} alt="redux"></img>
                            </div>
                            <div className="section__portafolio-cards-card-body">
                                React
                            </div>
                            <div className="section__portafolio-cards-card-footer">
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section__contacto">
                    <div className="section__contacto-a">
                        CONTACTO
                    </div>
                    <div className="section__contacto-b">
                        <h3>Construyamos Soluciones Juntos</h3>
                        <p><b>Correo:</b> j.ahr@hotmail.com</p>
                        {/*<p><b>Teléfono/Whatsapp</b><a href="https://api.whatsapp.com/send?phone=573124224944" target="_blank">+57 3124224944</a></p>*/}
                        <p><b>Github</b> Johnssther</p>
                        <p><b>Linkendlin</b> JOHN </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Index;
