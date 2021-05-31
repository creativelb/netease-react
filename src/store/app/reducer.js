let defaultStatus = {
    token: ''
}

const app = (state = defaultStatus, action = {}) => {
    switch (action.type) {
        case 'changeToken' :
            state.token = action.data
            return state;
        default:
            return state
    }
}
export default app