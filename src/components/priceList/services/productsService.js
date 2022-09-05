import apiService from "../../../helpers/apiService";

export default {

    create: async (payload) => {
        const response = await apiService.post("add", payload);
        return response.data;
    }

}
