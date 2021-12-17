import { render, screen } from '@testing-library/react';
import List from '.';
import ApiClient from "../../ApiClient";

jest.mock("../../ApiClient");

describe("List", () => {
    it("has a heading", () => {
        render(<List />);
        expect(screen.getByText("Lists")).toBeInTheDocument();
    })

    it("displays 'could not fetch lists' when an error occurs", () => {
        ApiClient.mockImplementation(() => {
            const get_lists = async () => await Promise.reject("example error")
        })

        render(<List />);

        expect(screen.queryByText("No lists exist")).not.toBeInTheDocument();
        expect(screen.getByText("Could not fetch lists")).toBeInTheDocument();
    })

    it("displays no lists when none exist", () => {
        ApiClient.mockImplementation(() => {
            const get_lists = async () => []
        })

        render(<List />);

        expect(screen.getByText("No lists exist")).toBeInTheDocument();
        expect(screen.queryByText("Could not fetch lists")).not.toBeInTheDocument();
    })
});