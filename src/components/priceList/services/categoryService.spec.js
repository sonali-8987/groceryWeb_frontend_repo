import apiService from "../../../helpers/apiService";
import categoryService from "./categoryService";

jest.mock("../../../helpers/apiService");

describe("Category Service", () => {
    it("should return all category", async () => {
        const data = [
            {
                category: {
                    id: "1",
                    category: "VEGETABLES"
                },
            },
        ];

        apiService.get.mockResolvedValue({ data: data });
        const categories = await categoryService.fetchAllCategory();

        expect(categories).toHaveLength(1);

        expect(categories).toEqual([
            {
                category: {
                    id: "1",
                    category: "VEGETABLES"
                },
            },
        ]);
    });
});
