import React from 'react';
import {
    Link
  } from 'react-router-dom'

function BriefcaseDetails(props) {
    const {params} = props.match
    const {id} = params
  return (
    <div className="big-container slidein">
        <div className="container">
            <h2 className="display-2 text-center">Portafolio {id}</h2>
            <div className="grid col-2 col-md-2 col-sm-1 color-dark">
                <div className="card text-center">
                    <img src={"http://hakastudio.com/img/PORTAFOLIO/app_movil.jpg"}></img>
                </div>
                <div className="card text-center">
                    <div className="card-title">
                        <h3 className="display-3">Es un hecho establecido hace demasiado</h3>
                    </div>
                    <div className="card-body">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería.</p>
                    <p>Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería.</p>
                    <button className="btn" style={{width:"12rem"}}>Ir al proyecto</button>
                    </div>
                </div>
            </div>
            <Link to="/briefcases" className="color-dark">Volver</Link>
        </div>
    </div>
  );
}

export default BriefcaseDetails;

