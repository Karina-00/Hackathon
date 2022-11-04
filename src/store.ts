import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./reducers/userSlice";
import unLogUserSlice from "./reducers/unLogUserSlice";

const store = configureStore({
	reducer: {userSlice,unLogUserSlice}

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;