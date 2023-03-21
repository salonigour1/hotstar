import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './feature/users/userSlice';
import movieReducer from './feature/movie/movieSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
