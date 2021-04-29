import React, { useState } from 'react'
import ListNames from './listNames';
import uniqid from 'uniqid'

const CreateName = () => {

    const [name, setName] = useState('')
    const [listnames, setListnames] = useState([])

    const addName = (e)=> {
        e.preventDefault()
        const newName = {
            id:listnames.length + 1,
            name:name
        }
        setListnames([...listnames, newName])
        setName('')
        console.log(listnames);
    }

    return (
        <div className="container">
            <div className="form">
                <h1>Agregar Nombre Nuevo <span>{listnames.length}</span></h1>
                <form className="form" onSubmit={(e)=>addName(e)}>
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Escriba una tarea" className="input" value={name}></input>
                    <button className="btn-primary">Agregar Tarea</button>
                </form>
            </div>
            <ListNames names={listnames}></ListNames>
        </div>
    );
}

export default CreateName