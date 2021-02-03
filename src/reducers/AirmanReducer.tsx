export const airmanReducer = (state : any = {
    airmen: [{
        id: 0,
        name: 'Giorgos',
        surname: 'Chronis'
      },
      {
        id: 1,
        name: 'Stefan',
        surname: 'Trikalinos'
      },
      {
        id: 2,
        name: 'Stavros',
        surname: 'Netflixakias'
      },
      {
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