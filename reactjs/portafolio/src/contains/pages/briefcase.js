import React from 'react';
import img_laravel from '../../assets/img/logos/laravel.svg';
import img_reactjs from '../../assets/img/logos/reactjs.svg';
import img_redux from '../../assets/img/logos/redux.svg';

function Cover() {
  return (
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
  );
}

export default Cover;

