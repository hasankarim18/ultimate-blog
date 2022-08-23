import { POST_LOADED, POST_LOADING, POST_LOAD_FAILED } from "./blogActionTypes";
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