import axios, { AxiosRequestConfig } from "axios";

type TGeneric<T> = T | null;
export interface FetchResponse<T> {
  count: TGeneric<number>;
  next: TGeneric<number>;
  previous: TGeneric<number>;
  data: T[];
  status: TGeneric<string>;
  error: TGeneric<string>;
}
export interface FetchData<T> {
  count: TGeneric<number>;
  next: TGeneric<number>;
  previous: TGeneric<number>;
  data: T;
  status: TGeneric<string>;
  error: TGeneric<string>;
}

export interface PostData<T> {
  data: T;
  status: TGeneric<string>;
  error: TGeneric<string>;
}

export interface GetDetails<T> {
  data: T;
  status: TGeneric<boolean>;
  error: TGeneric<boolean>;
  details: string;
}
export interface GetDetailsOnly {
  data: string;
  status: TGeneric<boolean>;
  error: TGeneric<boolean>;
  details: string;
}

export interface GetDataOnly<T> {
  data: T[];
  status: TGeneric<boolean>;
  error: TGeneric<boolean>;
}

const axiosInstance = axios.create({
  baseURL: "https://social--platform-app-hz5xy.ondigitalocean.app/api",
});

axiosInstance.interceptors.request.use((config) => {
  const tokenLocalStorage = localStorage.getItem("token");

  if (tokenLocalStorage)
    config.headers["Authorization"] = `Bearer ${tokenLocalStorage}`;

  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //console.log(error, "error");
    if (
      error.response.data.detail ===
      "Authentication credentials were not provided."
    )
      // window.location.href = "/user-login";
      localStorage.setItem("auth", "false");

    return Promise.reject(error);
  }
);
class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getDash = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchData<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getDetails = async () => {
    return await axiosInstance.get(this.endpoint).then((res) => res.data);
  };

  getDetailsOnly = async () => {
    return await axiosInstance
      .get<GetDetailsOnly>(this.endpoint)
      .then((res) => res.data);
  };
  getData = async (config: AxiosRequestConfig) => {
    return await axiosInstance
      .get(this.endpoint, config)
      .then((res) => res.data);
  };
  getDelete = (id: number) => {
    console.log(id);
    return axiosInstance
      .get<FetchData<T>>(this.endpoint)
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  put = (data: T) => {
    return axiosInstance.put<T>(this.endpoint, data).then((res) => res.data);
  };

  postCheader = (data: T) => {
    const token = sessionStorage.getItem("token-storage") || "";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosInstance
      .post<T>(this.endpoint, data, {
        headers,
      })
      .then((res) => res.data);
  };
  putMultiPart = (formData: FormData) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return axiosInstance
      .put<FetchData<T>>(this.endpoint, formData, {
        headers,
      })
      .then((res) => res.data);
  };
  postMultiPart = (formData: FormData) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return axiosInstance
      .post<FetchData<T>>(this.endpoint, formData, {
        headers,
      })
      .then((res) => res.data);
  };

  postWithoutBody = async () => {
    return await axiosInstance
      .post<PostData<T>>(this.endpoint)
      .then((res) => res.data);
  };

  postPromo = async () => {
    return await axiosInstance
      .post<PostData<number>>(this.endpoint)
      .then((res) => res.data);
  };

  delete = async (id?: number | object) => {
    console.log(id);
    return await axiosInstance.delete(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
