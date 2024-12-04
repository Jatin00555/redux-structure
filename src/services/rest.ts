import axios from "axios";

export const createAxiosInstance = (
  baseUrl: string,
  headers: {
    "Content-Type": string;
    "Access-Control-Allow-Origin": string;
    Authorization?: string;
  }
) => {
  return axios.create({
    baseURL: baseUrl,
    headers: headers,
  });
};

export const axiosInstance = (
  baseUrl: string,
  headers: {
    "Content-Type": string;
    "Access-Control-Allow-Origin": string;
    Authorization?: string;
  }
) => {
  const instance = createAxiosInstance(baseUrl, headers);

  const GET = async (url: string, params = {}) => {
    const response = await instance.get(url, { params });
    return response;
  };
  const POST = async (url: string, data: object) => {
    const response = await instance.post(url, data);
    return response;
  };
  const PUT = async (url: string, data: object) => {
    const response = await instance.put(url, data);
    return response;
  };
  const DELETE = async (url: string, data?: object) => {
    if (data) {
      const response = await instance.delete(url, { data: data });
      return response;
    } else {
      const response = await instance.delete(url);
      return response;
    }
  };
  const PATCH = async (url: string, data: object) => {
    const response = await instance.patch(url, data);
    return response;
  };

  return {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
  };
};

export const platformHeader = {
  "Content-Type": "application/JSON",
  "Access-Control-Allow-Origin": "*",
};

export const apiPlatform = axiosInstance("localhost", platformHeader);
