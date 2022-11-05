import { createSlice } from "@reduxjs/toolkit";


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
	isLogin: true,
};


export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
	},
},)

export default userSlice.reducer;