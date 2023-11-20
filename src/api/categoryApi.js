import axiosClient from "./axiosClient";

const categoryApi = {
    
    getCategoryList: (params) => {
        const url = '/category'
        return axiosClient.get(url, {params});
    },
    
    getAllCategory: () => {
        const url = '/category/all'
        return axiosClient.get(url);
    },
    
    getCategoryDetail: (id) => {
        const url = '/category/' + id;
        return axiosClient.get(url);
    },

    createCategory: (params) => {
        const url = '/category';
        return axiosClient.post(url, params);
    },

    editCategory: (id, params) => {
        const url = '/category/' + id;
        return axiosClient.put(url, params);
    },

    deleteCategory: (id) => {
        const url = '/category/' + id;
        return axiosClient.delete(url);
    },
}

export default categoryApi;