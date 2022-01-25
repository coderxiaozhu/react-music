import { combineReducers } from "redux";
import { reducer as recommend } from '@/pages/discovery/c-pages/recommend/store'

const reducer = combineReducers({
    recommend
})

export default reducer