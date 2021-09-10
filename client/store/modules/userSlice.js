import { createSlice, createSelector } from '@reduxjs/toolkit';

export const name = 'USER_ENV';

const initialState = {
  userLocation: '',
  sessionId: '',
}

const reducers = {
  setLoc: (state, { payload }) => {
    state.userLocation = payload;
  },
  setId: (state, { payload }) => {
    state.sessionId = payload;
  }
}

const slice = createSlice({
  name,
  initialState,
  reducers
})

const selectAllState = createSelector(
  state => state.userLocation,
  state => state.sessionId,

  ( userLocation, sessionId ) => {
    return { userLocation, sessionId };
  }
)

export const selector = {
  all: state => selectAllState(state[name])
}

export const reducer = slice.reducer;
export const action = slice.actions;