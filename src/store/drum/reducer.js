import {DrumActionType} from "./types";
import data from '../../dram.json'

const drumReducer = (state = data ,action) => {
    switch (action.type) {
        case DrumActionType.SETDRUM:
            return {...state,
                item: action.item
            }
        default:
            return state
    }
}




export default drumReducer
