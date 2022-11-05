import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {unLogUserSlice} from "./unLogUserSlice";


type UserProps = {
	id: number,
	name: string,
	surname: string,
	username: string,
	email: string,
	cash: number,
	isLogin: boolean,
}

const initialState: UserProps = {
	id: 0,
	name: '',
	surname: '',
	username: '',
	email: '',
	cash: 0,
	isLogin: true,
};


export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeIsLoginD: (state, { payload }: PayloadAction<UserProps['isLogin']>) => {
			state.isLogin = payload;
		},
		changeID: (state, { payload }: PayloadAction<UserProps['id']>) => {
			state.id = payload;
		},
		changeUser: (state, { payload }: PayloadAction<UserProps>) => {
			state.name = payload.name;
			state.surname = payload.surname;
			state.username = payload.username;
			state.email = payload.email;
			state.cash = payload.cash;
		},
	},
	extraReducers: (builder) => {
	},
},)

export const { changeIsLoginD, changeUser, changeID }= userSlice.actions;

export default userSlice.reducer;