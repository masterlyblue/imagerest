import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";

// import { reducer as user_reducer, name as user_name} from './userSlice';
import { reducer as counter_reducer, name as counter_name } from './counterSlice'

export const rootReducer = (state = {}, action) => {
  if (action.type === HYDRATE) {
    console.log('HYDRATE', action);
    return {
      ...state,
      ...action.payload,
    }
  }

  return combineReducers({
    [counter_name]: counter_reducer,

  })(state, action);
}