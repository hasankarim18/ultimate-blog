import { LOAD_USER, LOAD_USER_FAILED, OPEN_AUTHOR_DETAILS } from "./userActionType";



const initialState = {
    userList: [],
    loadUserFailed: false,
    selectedAuthorId: null,
    openAuthorDetails: false
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
        case OPEN_AUTHOR_DETAILS:
            // console.log(action.payload)
            return {
                ...state,
                selectedAuthorId: action.payload,
                openAuthorDetails: !state.openAuthorDetails
            }
        default:
            return state
    }
}

export default userReducer