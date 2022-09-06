
import apiService from "../../../helpers/apiService";

// eslint-disable-next-line
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
    edit: async (payload) => {

        const response = await apiService.put("edit_product", payload);
        return response.data;
    }

}

