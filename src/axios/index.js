import axios from "axios";

// https://github.com/axios/axios#creating-an-instance

const instance = axios.create({
  // baseURL: "https://localhost:44382/api/",
  baseURL: "https://hairforceone.azurewebsites.net/api/",
  headers: { "Content-type": "application/json" },
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");

// instance.defaults.headers.post["Content-Type"] = "application/Json";

export default instance;
