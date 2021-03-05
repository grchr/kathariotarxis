import { AirmanModel } from "../models/AirmanModel"

export function setCurrentActivePage(key : string) {
    return {
        type: 'page/changed',
        payload: key
    }
}

export function setEditedAirmen(key : any) {
    return {
        type: 'airmen/airmanEdited',
        payload: key
    }

}

export function setCurrentlyEditedAirman(key: AirmanModel) {
    return {
        type: 'airmen/currentlyEditedAirmanChanged',
        payload: key
    }
}

export function setVisibleAirmanDrawer(key: boolean) {
    return {
        type: 'airmen/status/visibleAirmanDrawer',
        payload: key
    }
}