import apiService from "../../../helpers/apiService";

// eslint-disable-next-line
export default {


    fetchAll: async () => {
        const response = await apiService.get("bill");
        return response.data;
    },


}
