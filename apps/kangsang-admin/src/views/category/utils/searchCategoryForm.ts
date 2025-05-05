import { IFormField, InputTypeEnum } from "@/types/form";
import { ITableColumn } from "@/types/table";
import * as yup from "yup";

export type SearchCategoryFormType = {
  search?: string;
  page: number;
  limit: number;
  orderBy: string;
  order: string;
};

export const searchCategoryFormValidationSchema = () =>
  yup.object({
    search: yup.string(),
    page: yup.number().default(1),
    limit: yup.number().default(20),
    orderBy: yup.string().default("updatedAt"),
    order: yup.string().default("desc"),
  });

export const searchCategoryFormFields: IFormField[] = [
  {
    id: "name",
    type: InputTypeEnum.TEXT,
    title: "Search name",
    description: "Search from category name",
    placeholder: "Enter search category name",
  },
];

export const categoryColumns: ITableColumn[] = [
  {
    id: "id",
    label: "ID",
    sortable: false,
  },
  {
    id: "name",
    label: "Name",
    sortable: true,
  },
  {
    id: "coverImage",
    label: "Image",
    sortable: false,
  },
  {
    id: "updatedAt",
    label: "Updated",
    sortable: true,
  },
  {
    id: "actions",
    label: "Edit/Delete",
    sortable: false,
  },
];
