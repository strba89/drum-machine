import {ControllerActionType} from "./types";


export const setController = controller => ({
    type: ControllerActionType.SETCONTROLLER,
    payload: controller
})