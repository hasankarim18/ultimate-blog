import { combineReducers } from 'redux'
import blogReducer from './blog/blogReducer'
import userReducer from './user/userReducer'





const rootReducer = combineReducers({
    blog: blogReducer,
    user: userReducer
})


export default rootReducer