import axiosClient from "./axiosClient";

const userExpenseApi = {
    getUserExpense: (params) => {
        const url = '/user-expenses'
        return axiosClient.get(url, { params });
    },
    createUserExpense: (data) => {
        const url = '/user-expenses'
        return axiosClient.post(url, data);
    },
    deleteUserExpense: (id) => {
        const url = '/user-expenses/' + id
        console.log(id);
        return axiosClient.delete(url)
    },
    updateUserExpense: (data, id) => {
        const url = '/user-expenses/' + id
        return axiosClient.put(url, data)
    }
}

export default userExpenseApi;