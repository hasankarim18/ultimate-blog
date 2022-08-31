import {
    POST_LOADED, POST_LOADING, POST_LOAD_FAILED, OPEN_POST_DETAIL, OPEN_USER_DETAILS,
    SINGLE_POST_LOADING,
    SINGLE_POST_LOADED,
    SINGLE_POST_FAILED


} from "./blogActionTypes";
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
                console.log('all post call')
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

//fetch single post 

const singlePostLoading = () => {
    return {
        type: SINGLE_POST_LOADING
    }
}

const singlePostLoaded = (post) => {
    return {
        type: SINGLE_POST_LOADED,
        payload: post
    }
}


const singlePostFailed = () => {
    return {
        type: SINGLE_POST_FAILED,

    }
}


export const fetchSinglePost = (postId) => {
    return dispatch => {
        dispatch(singlePostLoading)

        axios.get(`https://my-json-server.typicode.com/hasankarim18/booklist-server/blogPosts/${postId}`)
            .then(res => {
                console.log('single post call')
                dispatch(singlePostLoaded(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(singlePostFailed())
            })
    }
}