import apiService from "../../../helpers/apiService";

export default {

  fetchAllItem: async () => {
    const response = await apiService.get("product");
    return response.data;
  },
};
