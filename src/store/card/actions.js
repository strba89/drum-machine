import {CardActionType} from "./types";


export const setCard = name => ({
    type: CardActionType.SETCARD,
    payload: name
})
