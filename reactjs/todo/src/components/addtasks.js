import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../redux/actions/index";

const AddTasks = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = () => {
    if (task == '' || description == '') {
      alert('Ingrese el tituo/descripción de la tarea.');
    } else {
      let newtask = {
        id:tasks.tasks.length+1,
        name:task,
        description:description,
        complete:false,
      }
      dispatch(actions.tasks.addTask(newtask));
      setTask('');
      setDescription('');
    }
  }

  return (
    <div className="container row mt-5">
      <div className="form-floating mb-3">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}className="form-control"></input>
        <label htmlFor="floatingInput">Nombre de la tareas</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}className="form-control"></input>
        <label htmlFor="floatingInput">Descripción</label>
      </div>
      <button onClick={() => addTask()} className="btn btn-dark">Agregar Tarea</button>
    </div>
  );
}

export default AddTasks;
