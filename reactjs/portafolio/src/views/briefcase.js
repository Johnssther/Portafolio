import React, { Suspense } from 'react'
import {
  Link
} from 'react-router-dom'

function Briefcase() {
  return (
    <div className="big-container">
        <div className="container">
            <h2 className="display-2 text-center">Portafolio</h2>
            <div className="grid col-3 col-md-2 col-sm-1">
                <Link to="/briefcases/1">
                    <div className="card bg-primary color-white cursor-pointer">
                        <div className="card-title">
                            Aplicacion de finanzas personales
                        </div>
                    </div>
                </Link>
                
                <Link to="/briefcases/2" className="color-dark">
                    <div className="card cursor-pointer">
                        Aplicacion de finanzas personales
                    </div>
                </Link>
                
                <Link to="/briefcases/3" className="color-dark">
                    <div className="cursor-pointer card">
                        Aplicacion de tecnicos
                    </div>
                </Link>
                
                <Link to="/briefcases/4" className="color-dark">
                    <div className="cursor-pointer card">
                        CRM
                    </div>
                </Link>
                
                <Link to="/briefcases/5" className="color-dark">
                    <div className="cursor-pointer card">
                        Aplicacion de finanzas personales
                    </div>
                </Link>
                
                <Link to="/briefcases/6" className="color-dark">
                    <div className="cursor-pointer card bg-primary color-white">
                        Aplicacion de tecnicos
                    </div>
                </Link>

            </div>
        </div>
    </div>
  );
}

export default Briefcase;

