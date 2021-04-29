import React from 'react'

const ListNames = (props) => {
    return (
        <div>
            <ul>
                {props.names.map((item)=> {
                    return(
                        <li key={item.id}>{item.id} - {item.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListNames