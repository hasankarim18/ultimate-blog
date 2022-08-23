import { LOAD_USER, LOAD_USER_FAILED } from "./userActionType";



const initialState = {
    userList: [],
    loadUserFailed: false
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                userList: action.payload,
                loadUserFailed: false
            }
        case LOAD_USER_FAILED:
            return {
                ...state,
                userList: [],
                loadUserFailed: true
            }

        default:
            return state
    }
}

export default userReducer