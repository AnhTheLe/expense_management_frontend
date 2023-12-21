import axiosClient from "./axiosClient";

const statisticApi = {
    getStatisticalByTime: (startDate, endDate) => {
        const url = '/user-expenses/statistical-by-time?start_date=' + startDate + "&end_date=" +endDate;
        return axiosClient.get(url);
    },
    getStatisticalByCategory: (startDate, endDate) => {
        const url = '/user-expenses/statistical?start_date=' + startDate + "&end_date=" +endDate;
        return axiosClient.get(url);
    },
}

export default statisticApi;