import { combineReducers } from 'redux'
import blogReducer from './blog/blogReducer'
import userReducer from './user/userReducer'
import searchReducer from './search/searchReducer'





const rootReducer = combineReducers({
    blog: blogReducer,
    user: userReducer,
    search: searchReducer
})


export default rootReducer