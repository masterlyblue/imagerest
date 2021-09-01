import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from 'store/modules/index';

const makeStore = () => configureStore ({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: getDefaultMiddleware(),
})

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});