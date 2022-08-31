import {
    POST_LOADED, POST_LOADING, POST_LOAD_FAILED, OPEN_POST_DETAIL, OPEN_USER_DETAILS,
    SINGLE_POST_LOADING,
    SINGLE_POST_LOADED,
    SINGLE_POST_FAILED
} from "./blogActionTypes";


const inittialState = {
    blogPosts: [],
    blogUsers: [],
    postLoading: true,
    postLoadFailed: false,
    openPostDetail: false,
    openUserDetails: false,
    selectedPostId: null,
    singlePostLoading: false,
    singelPostLoaded: {},
    singlePostFailed: false
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
                openPostDetail: !state.openPostDetail,
                selectedPostId: action.payload
            }
        case OPEN_USER_DETAILS:
            return {
                ...state,
                openUserDetails: !state.openUserDetails
            }
        case SINGLE_POST_LOADING:
            return {
                ...state,
                singelPostLoaded: {},
                singlePostFailed: false,
                singlePostLoading: true
            }
        case SINGLE_POST_LOADED:
            return {
                ...state,
                singlePostLoading: false,
                singlePostFailed: false,
                singelPostLoaded: action.payload
            }
        case SINGLE_POST_FAILED:
            return {
                ...state,
                singlePostLoading: false,
                singlePostFailed: true,
                singelPostLoaded: {}
            }
        default:
            return state
    }

}


export default blogReducer

