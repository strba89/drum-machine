import {DrumActionType} from "./types";


export const setDrum = item => ({
    type: DrumActionType.SETDRUM,
    payload: item
})