import axios from '../../utils/axios';
import { clearValues } from './jobSlice';
import { logoutUser } from '../user/userSlice';

export async function createJobThunk(url, job, api) {
  try {
    const resp = await axios.post(url, job, {
      headers: {
        Authorization: `Bearer ${api.getState().user.user.token}`,
      },
    });
    api.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      api.dispatch(logoutUser());
      return api.rejectWithValue('Unauthorized! Logging Out...');
    }
    return api.rejectWithValue(error.response.data.msg);
  }
}
