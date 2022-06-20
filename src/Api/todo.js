import axios from "axios";

//when we need  to use n API
const instance = axios.create({
  baseURL: `https://62a1c619efe73bc8bc250c23.endapi.io`,
  //if there is not response after 5 second, cancel the request
  timeout: 5000,
});
export default instance;
