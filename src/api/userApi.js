import axiosClient from './axiosClient';

const userApi = {
  getCurrentUser: (params) => {
    const url = '/user/current-user?username=' + params;
    return axiosClient.get(url);
  },

  editAccount: (id, params) => {
    const url = '/update-user/' + id;
    return axiosClient.put(url, params);
  },
};

export default userApi;