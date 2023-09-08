import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  user: null,
};

export const registerUser = createAsyncThunk('user/register', (user) => {
  console.log('User created', user);
});

export const loginUser = createAsyncThunk('user/login', (user) => {
  console.log('User logged in', user);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
