import { POST_LOADED, POST_LOADING, POST_LOAD_FAILED } from "./blogActionTypes";


const inittialState = {
    blogPosts: [],
    blogUsers: [],
    postLoading: true,
    postLoadFailed: false

}


const blogReducer = (state = inittialState, action) => {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                postLoading: true
            }

        case POST_LOADED:
            return {
                ...state,
                blogPosts: action.payload,
                postLoading: false
            }
        case POST_LOAD_FAILED: {
            return {
                ...state,
                postLoadFailed: true,
                postLoading: false
            }
        }
        default:
            return state
    }

}


export default blogReducer

