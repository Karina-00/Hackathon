import {createSlice, PayloadAction} from "@reduxjs/toolkit";


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
	isLogin: false,
	password: '',
};


function setLoginUserApiAsync() {
	return fetch('https://mywebsite.com/api/login', {
		method: 'POST',
		body: JSON.stringify({
			username: 'ola',
			password: 'lol',
		})
	}).then((response) => response.json())
		.then((responseJson) => {
			return responseJson.success;
		})
		.catch((error) => {
			console.error(error);
		});
}

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
	},
	extraReducers: (builder) => {
	},
},)


export const { changeName, changePassword, changeSurname, changeEmail } = unLogUserSlice.actions;

export default unLogUserSlice.reducer;