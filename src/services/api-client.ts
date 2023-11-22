import axios, { AxiosRequestConfig } from "axios";

type TGeneric<T> = T | null;

export interface PostData<T> {
  data: T;
  status: TGeneric<string>;
  error: TGeneric<string>;
}

const axiosInstance = axios.create({
  baseURL: "https://social--platform-app-hz5xy.ondigitalocean.app/api",
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };
  getDash = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
  get = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  getData = async (config: AxiosRequestConfig) => {
    return await axiosInstance
      .get(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  put = (data: T) => {
    return axiosInstance.put<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
