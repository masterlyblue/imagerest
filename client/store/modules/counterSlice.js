import { createSlice, createSelector } from '@reduxjs/toolkit';

export const name = 'COUNT';

const initialState = {
  value: 0,
}

const reducers = {
  increment: state => state.value + 1,
  decrement: state => state.value - 1,
}

const slice = createSlice({
  name,
  initialState,
  reducers
})

const selectAllState = createSelector(
  state => state.value,

  (value) => {
    return { value };
  }
).actions
export const selector = {
  all: state => selectAllState(state)
}

export const reducer = slice.reducer;
export const action = slice.actions;