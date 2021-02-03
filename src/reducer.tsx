import { combineReducers } from 'redux'
import { airmanReducer } from './reducers/AirmanReducer';
import { choreReducer } from './reducers/ChoreReducer';
import { statusReducer } from './reducers/StatusReducer';

const rootReducer = combineReducers({
  airmen: airmanReducer,
  chores: choreReducer,
  status: statusReducer
})

export default rootReducer