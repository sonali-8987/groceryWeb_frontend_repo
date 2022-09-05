
import apiService from "../../../helpers/apiService";

export default {

    create: async (payload) => {
        const response = await apiService.post("add", payload);
        return response.data;
    },

    fetchAll: async () => {
        const response = await apiService.get("product");
        return response.data;
    },
    delete: async (id) => {
        const response = await apiService.delete(`delete/${id}`);
        return response.data;

    },

}

