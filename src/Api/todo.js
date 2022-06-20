import axios from "axios";

//when we need  to use n API
const instance = axios.create({
  baseURL: `https://62a1c619efe73bc8bc250c23.endapi.io`,
  //if there is not response after 5 second, cancel the request
  timeout: 5000,
});
instance.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    //system  log
    return Promise.reject(err);
  }
);
export default instance;
