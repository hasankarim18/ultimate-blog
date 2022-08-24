import { GET_SEARCH_TEXT, FILTER_BY_USERID, BACK_TO_ORIGINAL_POSTS } from "./searchActionType"

const initialState = {
    searchText: '',
    filterByUserId: null
}


const searchReducer = (state = initialState, action) => {
    if (action.type === GET_SEARCH_TEXT) {
        return {
            ...state,
            searchText: action.payload
        }
    } else if (action.type === FILTER_BY_USERID) {
        return {
            ...state,
            filterByUserId: action.payload
        }
    } else if (action.type === BACK_TO_ORIGINAL_POSTS) {

        return {
            ...state,
            searchText: '',
            filterByUserId: null

        }
    }
    else {
        return state
    }

}

export default searchReducer