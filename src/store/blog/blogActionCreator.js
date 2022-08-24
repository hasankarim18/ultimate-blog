import { POST_LOADED, POST_LOADING, POST_LOAD_FAILED, OPEN_POST_DETAIL, OPEN_USER_DETAILS } from "./blogActionTypes";
import axios from 'axios'
import url from "../url";

// post loading action

const postLoading = () => {
    return {
        type: POST_LOADING
    }
}


const postLoaded = (posts) => {
    return {
        type: POST_LOADED,
        payload: posts
    }
}


const postLoadFailed = () => {
    return {
        type: POST_LOAD_FAILED
    }
}



export const fetchPost = () => {
    return dispatch => {
        dispatch(postLoading())
        axios.get(url + '/blogPosts')
            .then(res => {
                dispatch(postLoaded(res.data))
            })
            .catch(err => {
                dispatch(postLoadFailed())
                console.log(err)
            })
    }
}

export const openPostDetail = (postId) => {
    return {
        type: OPEN_POST_DETAIL,
        payload: postId
    }
}

export const openUserDetails = (userId) => {
    return {
        type: OPEN_USER_DETAILS,
        payload: userId
    }
}