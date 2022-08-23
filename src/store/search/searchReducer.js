import { GET_SEARCH_TEXT } from "./searchActionType"

const initialState = {
    searchText: null
}


const searchReducer = (state = initialState, action) => {
    if (action.type === GET_SEARCH_TEXT) {
        return {
            ...state,
            searchText: action.payload
        }
    } else {
        return state
    }

}

export default searchReducer