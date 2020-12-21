import axios from "axios";

const instance = axios.create({
  // baseURL: "https://localhost:44382/api/",
  baseURL: "https://hairforceone.azurewebsites.net/api/",
  headers: { "Content-type": "application/json" },
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");

export default instance;
