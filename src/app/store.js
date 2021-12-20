import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/Slice/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
