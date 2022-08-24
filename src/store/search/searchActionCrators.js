import { GET_SEARCH_TEXT, FILTER_BY_USERID, BACK_TO_ORIGINAL_POSTS } from "./searchActionType"



export const getSearchText = (text) => {
    return {
        type: GET_SEARCH_TEXT,
        payload: text
    }
}


export const filterByUserId = (userId) => {
    return {
        type: FILTER_BY_USERID,
        payload: userId
    }
}

export const backToOriginalPosts = () => {
    return {
        type: BACK_TO_ORIGINAL_POSTS
    }
}

