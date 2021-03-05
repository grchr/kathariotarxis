export const statusReducer = (state : any = {
    activePage : '/',
    sideBarCollapsed: false,
    visibleAirmanDrawer: false
}, action : any) => {
    switch(action.type) {
        case 'page/changed': {
            console.log('page/changed');
            console.log(action);
            let newState = {
              ...state,
              activePage : action.payload
            }
            return newState;
        }
        case 'airmen/status/visibleAirmanDrawer': 
        return {
          ...state,
          visibleAirmanDrawer: action.payload
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;     
    }
}