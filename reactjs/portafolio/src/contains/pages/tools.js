import React from 'react';
import img_laravel from '../../assets/img/logos/laravel.svg';
import img_reactjs from '../../assets/img/logos/reactjs.svg';
import img_redux from '../../assets/img/logos/redux.svg';

function Tools() {
  return (
    <>
    <div className="big-container" style={{marginTop:'2rem'}}>
        <div className="grid col-3">
            <div className="span-2 span-md-3">
                <div className="card">
                    <h2>Herramientas</h2>
                    <p>Tenemos experiencia en Herramientas acrulizadas y modernas, estamos a la vanguardia del mercado, haciendo que el cliente tenga la mejor experiencia de usuario.</p>

                    <div className="var-progress">
                        <div className="var__progress-fill width-60">Python 60%</div>
                    </div>
                    <div className="var-progress">
                        <div className="var__progress-fill width-40">Django 40%</div>
                    </div>
                    <div className="var-progress">
                        <div className="var__progress-fill width-90">laravel 90%</div>
                    </div>

                    <div className="var-progress">
                        <div className="var__progress-fill width-80">HTML / CSS 80%</div>
                    </div>

                    <div className="var-progress">
                        <div className="var__progress-fill width-85">Javascript 85%</div>
                    </div>
                    <div className="var-progress">
                        <div className="var__progress-fill width-90">React 90%</div>
                    </div>
                    <div className="var-progress">
                        <div className="var__progress-fill width-80">Redux 80%</div>
                    </div>
                </div>
            </div>
            <div className="card span-1 span-md-3">
                <h3>Contacto</h3>
                <form action="">
                    <input className="input" type="text" placeholder="Correo Electronico"></input>
                    <textarea className="input" rows={5} type="text" placeholder="Descripción"></textarea>
                    <div className="card-footer">
                        <button className="button">Cancelar</button>
                        <button className="button green">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


{/*<div className="grid col-3">
        <div className="section__tools span-2">
            <p>Tools</p>
            <div className="section__tools-bar">
                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-60">Python</div>
                </div>
                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-40">Django</div>
                </div>
                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-90">laravel</div>
                </div>

                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-80">HTML / CSS</div>
                </div>

                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-85">Javascript</div>
                </div>
                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-90">React</div>
                </div>
                <div className="section__tools-bar-background">
                    <div className="section__tools-bar-background-fill width-80">Redux</div>
                </div>
                
            </div>
        </div>
        <div className="section__tools span-1">ff45</div>
  </div>*/}
  </>
  );
}

export default Tools;

