import React from 'react';

function Tools() {
  return (
    <>
    <div className="big-container" style={{marginTop:'2rem'}} id="tools">
        <div className="grid col-3">
            <div className="span-3 span-md-3">
                <div className="card">
                    <h2 className="display-2">Experiencia</h2>
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
                        <div className="var__progress-fill width-80">HTML / CSS - SASS 80%</div>
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
        </div>
    </div>
  </>
  );
}

export default Tools;

