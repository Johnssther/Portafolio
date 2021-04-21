import React from 'react';
import img_laravel from '../../assets/img/logos/laravel.svg';
import img_reactjs from '../../assets/img/logos/reactjs.svg';
import img_redux from '../../assets/img/logos/redux.svg';

function Cover() {
  return (
    <div className="big-container">
        <div className="container">
            <h2 className="display-2 text-center">Portafolio</h2>
            <div className="grid col-3 col-md-2 col-sm-1">
                <div className="card-bg-primary">
                    Aplicacion de finanzas personales
                </div>
                <div className="card">Aplicacion de tecnicos</div>
                <div className="card">CRM</div>
                <div className="card">
                    Aplicacion de finanzas personales
                </div>
                <div className="card-bg-primary">Aplicacion de tecnicos</div>
                <div className="card-bg-primary">CRM</div>
            </div>
        </div>
    </div>
  );
}

export default Cover;

