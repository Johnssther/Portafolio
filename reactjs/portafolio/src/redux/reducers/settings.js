const initialState = {
    toggle:true,
}
function settings(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, toggle: action.payload }

        default:
            return state;
    }
}
export default settings
