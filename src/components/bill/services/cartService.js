import apiService from "../../../helpers/apiService";

// eslint-disable-next-line
export default {

    create: async (payload) => {
        const response = await apiService.post("cart/add", payload);
        return response.data;
    },


}
