import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiError {
  code: number;
  message: string;
  error: string;
}

export interface ApiResponse{
  status: 'success'|'fail',
  data?: [],
  message?: string
}

const handleError = (error: AxiosError<ApiError>) => {
  console.error("API Request Error:", error);
  throw (error)
};

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiGet<T>(
  url: string,
  config?: AxiosRequestConfig
) {
  try {
    const response = await apiClient.get<T>(url, config);
    return  response.data;
  } catch (e: any) {
    handleError(e);
  }
}

export async function apiPost<T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) {
  try {
    const response = await apiClient.post<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return response.data;
  } catch (e: any) {
    handleError(e);
  }
}

export async function apiPut<T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) {
  try {
    const response = await apiClient.put<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return response.data;
  } catch (e: any) {
    handleError(e);
  }
}

export async function apiPatch<T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) {
  try {
    const response = await apiClient.patch<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );
    return response.data;
  } catch (e: any) {
    handleError(e);
  }
}

export async function apiDelete<T, D>(
  url: string,
  config?: AxiosRequestConfig<D>
) {
  try {
    const response = await apiClient.delete<T, AxiosResponse<T, D>, D>(
      url,
      config
    );
    return response.data;
  } catch (e: any) {
    handleError(e);
  }
}
