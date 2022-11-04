import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./reducers/userSlice";
import coursesSlice from "./reducers/courseSlice";

const store = configureStore({
	reducer: {userSlice, coursesSlice},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;