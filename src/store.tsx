import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducer";
import { Observable, BehaviorSubject } from "rxjs";

const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log("Logged Action: ", action);
  console.log("Logged Action2: ", action.payload);
  next(action);
};

const store = createStore(appReducer, {}, applyMiddleware(myLogger));

class Selectors {
//   activeNavigationItem$: Observable<string>;

//   private lastStoreValue: string = "home";
//   private activeNavigationItemSubject: BehaviorSubject<string>;

//   constructor() {
//     this.activeNavigationItemSubject = new BehaviorSubject<string>(
//       this.lastStoreValue
//     );
//     this.activeNavigationItem$ = this.activeNavigationItemSubject;
//     store.subscribe(() => {
//       const state = store.getState();
//       console.log('state.status.activePage: ', state.status.activePage);
//       console.log('this.lastStoreValue: ', this.lastStoreValue);
//       if (state.status.activePage !== this.lastStoreValue) {
//         this.lastStoreValue = state.status.activePage;
//         this.activeNavigationItemSubject.next(this.lastStoreValue);
//       }
//     });
//   }
}

const ReduxSelectors: Selectors = new Selectors();

export { store, ReduxSelectors };
