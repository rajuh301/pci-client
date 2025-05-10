import axios from "axios";
import { cookies } from "next/headers";

import envConfig from "@/src/config/envConfig";

const AxiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
