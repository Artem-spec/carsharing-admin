import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db",
  responseType: "json",
});
instance.defaults.headers.common["Authorization"] =
  "52efbe08228671240494f537f2486bc109a637b4";
instance.defaults.headers.common["X-Api-Factory-Application-Id"] =
  "5e25c641099b810b946c5d5b";

export default instance;
