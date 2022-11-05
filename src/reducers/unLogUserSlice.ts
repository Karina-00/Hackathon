import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";



type UserProps = {
	name?: string,
	surname?: string,
	username: string,
	email?: string,
	isLogin?: boolean,
	password: string,
}

const initialState: UserProps = {
	name: '',
	surname: '',
	username: '',
	email: '',
	isLogin: true,
	password: '',
};




export const unLogUserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeName: (state, { payload }: PayloadAction<UserProps['name']>) => {
			state.name = payload;
			console.log(state.name);
		},
		changePassword: (state, { payload }: PayloadAction<UserProps['password']>) => {
			state.password = payload;
		},
		changeEmail: (state, { payload }: PayloadAction<UserProps['email']>) => {
			state.email = payload;
		},
		changeSurname: (state, { payload }: PayloadAction<UserProps['surname']>) => {
			state.surname = payload;
		},
		changeIsLogin: (state, { payload }: PayloadAction<UserProps['isLogin']>) => {
			state.isLogin = payload;
			console.log(state.isLogin);
		},
	},
	extraReducers: (builder) => {
	},
},)


export const { changeName, changePassword, changeSurname, changeEmail, changeIsLogin } = unLogUserSlice.actions;

export default unLogUserSlice.reducer;