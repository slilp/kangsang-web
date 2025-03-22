import axios from "axios";
import { service } from "../servicePath";
import { LoginResponse } from "./types";

const login = async (requestBody: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const resp = await axios.post(`${service.public}/login`, requestBody);
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

const authApi = {
  login,
  register,
};

export default authApi;
