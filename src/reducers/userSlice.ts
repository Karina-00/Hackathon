import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {unLogUserSlice} from "./unLogUserSlice";


type UserProps = {
	name: string,
	surname: string,
	username: string,
	email: string,
	isLogin: boolean,
}

const initialState: UserProps = {
	name: '',
	surname: '',
	username: '',
	email: '',
	isLogin: false,
};


export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeIsLoginD: (state, { payload }: PayloadAction<UserProps['isLogin']>) => {
			state.isLogin = payload;
			console.log(state.isLogin);
		},
	},
	extraReducers: (builder) => {
	},
},)

export const { changeIsLoginD }= userSlice.actions;

export default userSlice.reducer;