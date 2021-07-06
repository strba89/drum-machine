import {ControllerActionType} from "./types";

const control = {
    volume : 30,
    power: true,
    cord: false
}

const controllerReducer = (state = control ,action) => {
    switch (action.type) {
        case ControllerActionType.SETCONTROLLER:
            return {...state,
               volume: action.payload.volume,
                power: action.payload.power,
                cord: action.payload.cord
            }
        default:
            return state
    }
}




export default controllerReducer
