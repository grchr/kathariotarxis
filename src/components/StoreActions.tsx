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