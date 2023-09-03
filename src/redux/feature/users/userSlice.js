import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    photo: '',
  },
  reducers: {
    setUserLoginDetail: (state, action) => {
      console.log(state.name);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state, action) => {
      state.name = '';
      state.email = '';
      state.photo = '';
    },
  },
});
export const { setSignOutState, setUserLoginDetail } = userSlice.actions;
export const selectUserName =  (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default userSlice.reducer;
