import * as axios from "axios";
import ApiClient from '.';

jest.mock("axios")

describe("ApiClient", () => {
    const apiClient = new ApiClient();

    describe("getting all lists", () => {
        it("throws a 404 with a not found message if the lists are not found", async () => {
            axios.get.mockImplementation(() => Promise.reject({ statusCode: 404 }));

            await expect(apiClient.get_lists).rejects.toThrowError("404: Lists not found.")
        })

        it("throws a 400 with a bad request message if there is an issue with the request", async () => {
            axios.get.mockImplementation(() => Promise.reject({ statusCode: 400 }));

            await expect(apiClient.get_lists).rejects.toThrowError("400: Bad request when getting all lists.")
        })

        it("throws a 500 with an internal server error message if there is an issue with the api", async () => {
            axios.get.mockImplementation(() => Promise.reject({ statusCode: 500 }));

            await expect(apiClient.get_lists).rejects.toThrowError("500: Internal server error when getting all lists.")
        })

        it("returns the status code and a message if the request is successful", async () => {
            const exampleSuccessStatusCode = 200
            const exampleSuccessMessage = "Lists retrieved successfully."
            axios.get.mockImplementation(() => Promise.resolve({ data: { message: exampleSuccessMessage }, status: exampleSuccessStatusCode }));

            const response = await apiClient.get_lists();

            expect(axios.get).toHaveBeenCalledWith("/lists");
            expect(response.status).toEqual(exampleSuccessStatusCode);
            expect(response.data.message).toEqual(exampleSuccessMessage);
        })
    })
});