import axios from "axios";

class ApiClient {
    async get_lists() {
        try {
            const response = await axios.get("/lists")
            return response
        } catch (error) {
            if (error.statusCode === 404) {
                throw new Error("404: Lists not found.")
            } else if (error.statusCode === 400) {
                throw new Error("400: Bad request when getting all lists.")
            } else if (error.statusCode === 500) {
                throw new Error("500: Internal server error when getting all lists.")
            }
        }
    }
}

export default ApiClient;