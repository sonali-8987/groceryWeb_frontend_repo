import apiService from "../../../helpers/apiService";

export default {

  fetchAllCategory: async () => {
    const response = await apiService.get("category");
    return response.data;
  },
};
