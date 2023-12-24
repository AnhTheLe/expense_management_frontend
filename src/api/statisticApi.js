import axiosClient from "./axiosClient";

const statisticApi = {
    getStatisticalByTime: (params) => {
        const url = '/user-expenses/statistical-by-time';
        return axiosClient.get(url,{params});
    },
    getStatisticalByCategory: (params) => {
        const url = '/user-expenses/statistical';
        return axiosClient.get(url,{params});
    },
}

export default statisticApi;