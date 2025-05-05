import axios from "axios";
import { service } from "../servicePath";
import { CreateCategoryRequest, ListCategoryResponse } from "./types";

const createCategory = async (requestBody: CreateCategoryRequest) => {
  const resp = await axios.post(`${service.secure}/category`, requestBody);
  return;
};

const listCategory = async (page: number, limit: number, orderBy: string) => {
  const resp = await axios.get<ListCategoryResponse>(
    `${service.secure}/category?page=${page}&limit=${limit}&orderBy=${orderBy}`
  );
  return resp.data;
};

const categoryApi = {
  listCategory,
  createCategory,
};

export default categoryApi;
