const initialState = {
    tasks: [
        {
            id:1,
            name:'Hacer e almuerzo',
            description:'Ir al supermercado y hacer el almuerzo',
            comlete:true,
        },
        {
            id:2,
            name:'Hacer aseo enla casa',
            description:'HACEREL ASEO DE LA HABITACION Y LA SALA EN LA CASA',
            comlete:false,
        },
    ],
}
function tasks(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, 
                tasks: [...state.tasks, action.payload] 
            }

        case 'DELETE_TASK':
            return { ...state, 
                tasks: state.tasks.filter(task => task.id !== action.payload) }

        default:
            return state;
    }
}
export default tasks
