import { createStore, applyMiddleware, Store } from "redux";
import appReducer from "./reducer";
import { Observable, BehaviorSubject } from "rxjs";
import thunk from "redux-thunk";

const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log("Logged Action: ", action);
  console.log("Logged Action Payload: ", action.payload);
  switch(action.type) {
    case 'airmen/airmanEdited': 
      //action.payload.surname = 'ChangedByMiddleware';
      break;
    default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        
  }
  next(action);
};

const store: Store = createStore(appReducer, {}, applyMiddleware(myLogger, thunk));

export { store };
