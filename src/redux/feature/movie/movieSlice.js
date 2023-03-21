import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    allMovies: [],
    recommend: [],
    newDisney: [],
    original: [],
    trending: [],
  },
  reducers: {
    setMovie: (state, action) => {
      state.recommend = action.payload.recommend;
      state.allMovies = action.payload.allMovies;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});
export const { setMovie } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectAllMovies = (state) => state.movie.allMovies;
export default movieSlice.reducer;
