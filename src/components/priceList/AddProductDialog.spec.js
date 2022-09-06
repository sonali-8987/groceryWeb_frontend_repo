import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddProductDialog from "./AddProductDialog";

describe("Basic Rendering add Product Dialog Pop-up", () => {
    const openDialog = true;
    const onClose = jest.fn();


    const fetchedCategories = [
        {
            id: "1",
            category: "VEGETABLES"
        },
        {
            id: "2",
            category: "FRUITS"
        },
    ];

    it("Should check if save button is present", () => {
        const { getByRole } = render(
            <AddProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                onClose={onClose}
            />
        );
        expect(getByRole("button", { name: "Save" })).toBeDefined();
    });

    it("Should check if drop down is present", () => {
        const { getByTestId } = render(
            <AddProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                onClose={onClose}
            />
        );
        expect(getByTestId("dropDownId")).toBeDefined();
    });

    it("Should check if item text is present", () => {
        const { getByTestId } = render(
            <AddProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                onClose={onClose}
            />
        );
        expect(getByTestId("itemID")).toHaveTextContent("Item");
    });

    it("Should check if price text is present", () => {
        const { getByTestId } = render(
            <AddProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                onClose={onClose}
            />
        );
        expect(getByTestId("priceID")).toHaveTextContent("Price");
    });
});