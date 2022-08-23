import { POST_LOADED, POST_LOADING, POST_LOAD_FAILED } from "./blogActionTypes";
import axios from 'axios'

const url = 'https://my-json-server.typicode.com/hasankarim18/booklist-server'
const blogPostsUrl = 'https://my-json-server.typicode.com/hasankarim18/booklist-server/blogPosts'
const bloguser = 'https://my-json-server.typicode.com/hasankarim18/booklist-server/blogUser'

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
        axios.get(blogPostsUrl)
            .then(res => {
                // console.log(res)
                dispatch(postLoaded(res.data))
            })
            .catch(err => {
                dispatch(postLoadFailed())
                console.log(err)
            })
    }
}