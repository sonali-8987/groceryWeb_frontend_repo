import apiService from "../../../helpers/apiService";

// eslint-disable-next-line
export default {
    
    fetchTotalPrice: async () => {
        const response = await apiService.get("cart/total_price");
        return response.data;
    },


}
