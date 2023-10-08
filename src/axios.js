import axios from "axios";

const instance = axios.create({
	//The API (cloud function) URL
	// baseURL: "http://127.0.0.1:5001/project-207b1/us-central1/api",
	baseURL: "http://127.0.0.1:5500",
});
export default instance;
