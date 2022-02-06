import { Map } from "immutable";
import * as actionTypes from './constants'

const initalState = Map({
    currentSong: {}
})

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        default:
            return state
    }
}

export default reducer