import { GET_SEARCH_TEXT } from "./searchActionType"



export const getSearchText = (text) => {
    return {
        type: GET_SEARCH_TEXT,
        payload: text
    }
}