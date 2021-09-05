import { createSlice, createSelector } from '@reduxjs/toolkit';

export const name = 'USER_ENV';

const initialState = {
  userLocation: '',
}

const reducers = {
  setLoc: (state, { payload }) => {
    state.userLocation = payload;
  }
}

const slice = createSlice({
  name,
  initialState,
  reducers
})

const selectAllState = createSelector(
  state => state.userLocation,

  (userLocation) => {
    return { userLocation };
  }
)

export const selector = {
  all: state => selectAllState(state[name])
}

export const reducer = slice.reducer;
export const action = slice.actions;