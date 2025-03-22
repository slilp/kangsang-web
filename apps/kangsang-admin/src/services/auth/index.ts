import axios from "axios";
import { service } from "../servicePath";
import { LoginResponse } from "./types";

const login = async (requestBody: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const resp = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_SERVICE_URL}/public/login`,
    requestBody
  );
  return resp.data;
};

const register = async (requestBody: {
  email: string;
  password: string;
  displayName: string;
}) => {
  const resp = await axios.post(`${service.public}/register`, requestBody);
  return resp.data;
};

const refreshToken = async (refreshToken: string): Promise<LoginResponse> => {
  const resp = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_SERVICE_URL}/public/refresh-token`,
    {
      refreshToken: refreshToken,
    }
  );
  return resp.data;
};

const authApi = {
  login,
  register,
  refreshToken,
};

export default authApi;
