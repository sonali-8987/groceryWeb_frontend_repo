import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditProductDialog from "./EditProductDialog";

describe("Basic Rendering add Product Dialog Pop-up", () => {
    const openDialog = true;
    const onClose = jest.fn();
    const editProductId = 1


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

    it("Should check if update button is present", () => {
        const { getByRole } = render(
            <EditProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                editProductId={editProductId}
                onClose={onClose}
            />
        );
        expect(getByRole("button", { name: "Update" })).toBeDefined();
    });

    it("Should check if drop down is present", () => {
        const { getByTestId } = render(
            <EditProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                editProductId={editProductId}
                onClose={onClose}
            />
        );
        expect(getByTestId("dropDownId")).toBeDefined();
    });

    it("Should check if item text is present", () => {
        const { getByTestId } = render(
            <EditProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                editProductId={editProductId}
                onClose={onClose}
            />
        );
        expect(getByTestId("itemID")).toHaveTextContent("Item");
    });

    it("Should check if price text is present", () => {
        const { getByTestId } = render(
            <EditProductDialog
                open={openDialog}
                allCategory={fetchedCategories}
                editProductId={1}
                onClose={onClose}
            />
        );
        expect(getByTestId("rateID")).toHaveTextContent("Rate");
    });
});