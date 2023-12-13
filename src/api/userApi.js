import axiosClient from './axiosClient';

const userApi = {
  getCurrentUser: (params) => {
    const url = '/user/current-user?username=' + params;
    return axiosClient.get(url);
  }
};

export default userApi;