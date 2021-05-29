import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from '../features/counter/userSlice';
=======
import userReducer from '../features/counter/counterSlice';
>>>>>>> 70eabfd9f1052d16dbd04b38bda48cf79d728128

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
