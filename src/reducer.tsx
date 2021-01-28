const initialState = {
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
    ],
    chores: [{
        id: 1,
        name: 'Mop the floor'
      },
      {
        id: 2,
        name: 'Sweep the floor'
      },
      {
        id: 3,
        name: 'Clean toilets'
      },
      {
        id: 4,
        name: 'Empty trashcans'
      }
    ]
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action : any) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'airmen/airmanEdited': {
        let airmanIndex = state.airmen.findIndex(a => a.id === action.payload.id);
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