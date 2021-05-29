import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
<<<<<<< HEAD
//     // The value we return becomes the `fulfilled` action payload
=======
//     // The value we return becomes the fulfilled action payload
>>>>>>> 70eabfd9f1052d16dbd04b38bda48cf79d728128
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
<<<<<<< HEAD
  // The `reducers` field lets us define reducers and generate associated actions
=======
  // The reducers field lets us define reducers and generate associated actions
>>>>>>> 70eabfd9f1052d16dbd04b38bda48cf79d728128
  reducers: {
    login: (state,action) => {

      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
<<<<<<< HEAD
    
=======

>>>>>>> 70eabfd9f1052d16dbd04b38bda48cf79d728128
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };
<<<<<<< HEAD

export default userSlice.reducer;
=======
export default userSlice.reducer;
>>>>>>> 70eabfd9f1052d16dbd04b38bda48cf79d728128
