import axios from "axios";

const instance = axios.create({
  baseUrl: "https://localhost:44382/api/",
  // baseURL: "https://hairforceone.azurewebsites.net/api/",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");

export default instance;
