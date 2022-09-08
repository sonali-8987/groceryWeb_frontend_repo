import apiService from "../../../helpers/apiService";

// eslint-disable-next-line
export default {

    create: async (payload) => {
        const response = await apiService.post("cart/add", payload);
        return response.data;
    },

    fetchAll: async () => {
        const response = await apiService.get("cart/item");
        return response.data;
    },

    delete: async (id) => {
        const response = await apiService.delete(`cart/delete/${id}`);
        return response.data;

    },

}

