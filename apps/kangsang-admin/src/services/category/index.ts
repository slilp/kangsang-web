import axios from "axios";
import { service } from "../servicePath";
import { CreateCategoryRequest } from "./types";

const createCategory = async (requestBody: CreateCategoryRequest) => {
  const resp = await axios.post(`${service.secure}/category`, requestBody);
  return;
};

const categoryApi = {
  createCategory,
};

export default categoryApi;
