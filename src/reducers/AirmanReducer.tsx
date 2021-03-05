import { AirmanModel } from '../models/AirmanModel'

export const airmanReducer = (state : any = {
    airmen: [
        new AirmanModel(0,0,'Giorgos', 'Chronis'),
        new AirmanModel(1,1,'Stefan', 'Trikalinos'),
        new AirmanModel(2,2,'Stavros', 'Netflixakias'),
        new AirmanModel(3,3,'Giorgos', 'Lamp')
    ],
    currentEditedAirmanRow: new AirmanModel(null, null, 'Test', 'Test')
}, action : any) => {
    switch(action.type) {
        case 'airmen/airmanEdited': {
            let airmanIndex = state.airmen.findIndex((a : AirmanModel) => a.id === action.payload.id);
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
        case 'airmen/currentlyEditedAirmanChanged': {
          console.log('airmen/currentlyEditedAirmanChanged');
          console.log('state before update');
          console.log(state);
          let newState = {
            ...state,
            airmen: [...state.airmen],
            currentEditedAirmanRow: AirmanModel.clone(action.payload)
          }
          console.log('state after update');
          console.log(newState);
          return newState
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;     
    }
}