import axios from "axios";
import { service } from "../servicePath";
import {
  CreateCategoryRequest,
  EditCategoryRequest,
  ICategoryInfo,
  ListCategoryResponse,
} from "./types";
import apiInstanceSecure from "../apiInstanceSecure";
import { NextRequest } from "next/server";

const createCategory = async (requestBody: CreateCategoryRequest) => {
  await axios.post(`${service.secure}/category`, requestBody);
};

const editCategory = async (requestBody: EditCategoryRequest) => {
  await axios.put(`${service.secure}/category/${requestBody.id}`, requestBody);
};

const deleteCategory = async ({ categoryId }: { categoryId: string }) => {
  await axios.delete(`${service.secure}/category/${categoryId}`);
};

const listCategory = async (page: number, limit: number, orderBy: string) => {
  const resp = await axios.get<ListCategoryResponse>(
    `${service.secure}/category?page=${page}&limit=${limit}&orderBy=${orderBy}`
  );
  return resp.data;
};

const getById = async (request: NextRequest, categoryId: string) => {
  const apiInstance = await apiInstanceSecure(request);

  const resp = await apiInstance.get<ICategoryInfo>(
    `/secure/category/${categoryId}`
  );
  return resp.data;
};

const categoryApi = {
  getById,
  listCategory,
  editCategory,
  createCategory,
  deleteCategory,
};

export default categoryApi;
