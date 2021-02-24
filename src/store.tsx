import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducer";
import { Observable, BehaviorSubject } from "rxjs";
import thunk from "redux-thunk";

const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log("Logged Action: ", action);
  console.log("Logged Action2: ", action.payload);
  next(action);
};

const store = createStore(appReducer, {}, applyMiddleware(myLogger, thunk));

export { store };
