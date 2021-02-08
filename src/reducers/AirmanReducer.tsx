export const airmanReducer = (state : any = {
    airmen: [{
        key: 0,
        id: 0,
        name: 'Giorgos',
        surname: 'Chronis'
      },
      {
        key: 1,
        id: 1,
        name: 'Stefan',
        surname: 'Trikalinos'
      },
      {
        key: 2,
        id: 2,
        name: 'Stavros',
        surname: 'Netflixakias'
      },
      {
        key: 3,
        id: 3,
        name: 'Giorgos',
        surname: 'Lamp'
      }
    ]
}, action : any) => {
    switch(action.type) {
        case 'airmen/airmanEdited': {
            let airmanIndex = state.airmen.findIndex((a : any) => a.id === action.payload.id);
            if (airmanIndex > -1) {
              let newState = {
                ...state,
                airmen: [...state.airmen]
              };
              newState.airmen[airmanIndex] = action.payload;
              return newState;
            }
            return state;
          }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;     
    }
}