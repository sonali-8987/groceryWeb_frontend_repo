import { when } from "jest-when";
import productsService from './productsService'
import apiService from "../../../helpers/apiService";

jest.mock('../../../helpers/apiService');

describe('Product Service', () => {

    it('should return all products', async () => {
        const data = [{

            category: { id: 3, category: 'GROCERY' },
            id: 66,
            item: "rice",
            price: 200

        },
        {
            category: { id: 2, category: 'VEGETABLE' },
            id: 67,
            item: "onion",
            price: 20
        }];

        apiService.get.mockResolvedValue({ data: data });
        const products = await productsService.fetchAll();

        expect(products).toHaveLength(2);

        expect(products).toEqual([{

            category: { id: 3, category: 'GROCERY' },
            id: 66,
            item: "rice",
            price: 200

        }, {
            category: { id: 2, category: 'VEGETABLE' },
            id: 67,
            item: "onion",
            price: 20

        }]);
    });
});
