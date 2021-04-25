import React from 'react';

function Contact() {
  return (
    <>
      <div className="big-container card-bg-primary text-center" id="contact">
          <h2 className="display-2 no-margin">Contacto</h2>
          <h3>Construyamos Soluciones Juntos</h3>
          <p><b>Github</b> Johnssther</p>
          <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/alejandro-hernandez-3b28827a/" target="_blank" title="Ir al perfil de LinkedIn">John A. Hernandez</a></p>
        </div>
        <div className="card span-1 span-md-3">
        <form action="">
            <input className="input" type="email" placeholder="Correo Electronico"></input>
            <textarea className="textarea" rows={5} type="text" placeholder="Descripción"></textarea>
            <div className="card-footer">
                <button className="button">Cancelar</button>
                <button className="button green">Enviar</button>
            </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
