import axios from '../../utils/axios';
import { logoutUser } from './userSlice';

export async function registerUserThunk(url, user, api) {
  try {
    const resp = await axios.post(url, user);
    return resp.data;
  } catch (error) {
    return api.rejectWithValue(error.response.data.msg);
  }
}

export async function loginUserThunk(url, user, api) {
  try {
    const resp = await axios.post(url, user);
    return resp.data;
  } catch (error) {
    return api.rejectWithValue(error.response.data.msg);
  }
}

export async function updateUserThunk(url, user, api) {
  try {
    const resp = await axios.patch('auth/updateUser', user, {
      headers: {
        authorization: `Bearer: ${api.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      api.dispatch(logoutUser());
      return api.rejectWithValue('Unauthorized! Logging Out...');
    }
    return api.rejectWithValue(error.response.data.msg);
  }
}
