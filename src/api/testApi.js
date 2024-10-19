import axios from "axios";

const testApi = axios.create({
  baseURL: "http://localhost:8080",
});

export default testApi;
