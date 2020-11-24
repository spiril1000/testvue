import axios from "axios";

const instance = axios.create({
  baseURL: "https://hairforceone.azurewebsites.net/api/",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");

export default instance;
