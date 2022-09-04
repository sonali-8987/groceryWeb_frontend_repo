import apiService from "../../../helpers/apiService";

export default {
    getCurrentVersion: async () => {
        const response = await apiService.get(`version`);
        return response.data;
    }
}