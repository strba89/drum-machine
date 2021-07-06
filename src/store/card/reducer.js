import {CardActionType} from "./types";

const data = {
    name: 'DRUM TO PLAY'
}

const cardReducer = (state = data ,action) => {
    switch (action.type) {
        case CardActionType.SETCARD:
            return {...state,
               name: action.payload
            }
        default:
            return state
    }
}




export default cardReducer
