import axios from "axios";
import { service } from "../servicePath";
import { ListUsersResponse } from "./types";

const listAllAdminUsers = async () => {
  return await axios.get<ListUsersResponse>(`${service.secure}/users`);
};

const userApi = {
  listAllAdminUsers,
};

export default userApi;
