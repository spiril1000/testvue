import axios from "axios";

const instance = axios.create({
  // baseURL: "https://localhost:44382/api/",
  baseURL: "https://hairforceone.azurewebsites.net/api/",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");

instance.defaults.headers.post["Content-Type"] = "application/Json";

export default instance;
