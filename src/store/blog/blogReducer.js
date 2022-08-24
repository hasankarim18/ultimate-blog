import { POST_LOADED, POST_LOADING, POST_LOAD_FAILED, OPEN_POST_DETAIL } from "./blogActionTypes";


const inittialState = {
    blogPosts: [],
    blogUsers: [],
    postLoading: true,
    postLoadFailed: false,
    openPostDetail: false,
    openPostDetailInsideUser: false
}


const blogReducer = (state = inittialState, action) => {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                postLoading: true,
                postLoadFailed: false,
            }

        case POST_LOADED:
            return {
                ...state,
                blogPosts: action.payload,
                postLoading: false,
                postLoadFailed: false,

            }
        case POST_LOAD_FAILED: {
            return {
                ...state,
                postLoadFailed: true,
                postLoading: false
            }
        }
        case OPEN_POST_DETAIL:
            return {
                ...state,
                openPostDetail: !state.openPostDetail
            }


        default:
            return state
    }

}


export default blogReducer

