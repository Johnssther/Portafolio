import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../redux/actions/index";

import './tasks.css';

const Tasks = () => {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="numbertasks">
        <span>{tasks.tasks.length}</span>
      </div>
      <div className="tasks"> 
        {tasks.tasks.reverse().map((item) => {
          return(
            <div className="card" key={item.id}>
              <div className="card__title">
                <h3>{item.id} - {item.name}</h3>
              </div>
              <div className="card__body">
                <p><span>Descripción: </span>{item.description}</p>
                <p><span>Estado: </span>{item.complete == true ? 'Terminada':'Sin completar'}</p>
                <button onClick={()=> dispatch(actions.tasks.deleteTask(item.id))} className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Tasks;