import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";

import { reducer as user_reducer, name as user_name } from './userSlice'

export const rootReducer = (state = {}, action) => {
  if (action.type === HYDRATE) {
    console.log('HYDRATE', action);
    return {
      ...state,
      ...action.payload,
    }
  }

  return combineReducers({
    [user_name]: user_reducer,

  })(state, action);
}