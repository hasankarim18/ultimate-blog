import { GET_SEARCH_TEXT, FILTER_BY_USERID, BACK_TO_ORIGINAL_POSTS, FILTER_BY_CATEGORY } from "./searchActionType"



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

export const filterByCategory = (cat) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: cat
    }
}

