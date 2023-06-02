import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "9c54877bf84bfdb3fcdb394a67158242";

const client = axios.create({
	baseURL: API_URL,
	params: { api_key: API_KEY },
});

export const searchMovie = async (query: string) => {
	try {
		const response = await client.get("/search/movie", { params: { query } });
		if (response.data && response.data.results) {
			return response.data.results;
		} else {
			console.error("Error in searchMovie");
		}
	} catch (error) {
		console.error(error);
		return [];
	}
};
