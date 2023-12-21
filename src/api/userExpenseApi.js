import axiosClient from "./axiosClient";

const userExpenseApi = {
    getUserExpense: (params) => {
        const url = '/user-expenses'
        return axiosClient.get(url, {params});
    },
    createUserExpense: (data) => {
        const url = '/user-expenses'
        return axiosClient.post(url, data);
    },  
}

export default userExpenseApi;