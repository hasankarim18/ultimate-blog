import { LOAD_USER, LOAD_USER_FAILED } from "./userActionType";
import axios from "axios";
import url from "../url";


const loadUser = (user) => {
    return {
        type: LOAD_USER,
        payload: user
    }
}


const load_user_failed = () => {
    return {
        type: LOAD_USER_FAILED,

    }
}

export const fetchUser = () => {
    return dispatch => {
        axios.get(url + '/blogUser')
            .then(res => {
                dispatch(loadUser(res.data))
            })
            .catch(err => {
                dispatch(load_user_failed())
                console.log(err)
            })
    }
}