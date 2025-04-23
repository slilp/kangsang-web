import { IFormField } from "@/types/form";
import * as yup from "yup";

export type CategoryFormType = {
  name: string;
  description: string;
  coverImage: string;
};

export const categoryFormValidationSchema = () =>
  yup.object({
    name: yup.string().required("*required field"),
    description: yup.string().required("*required field"),
    coverImage: yup.string().required("*required field"),
  });

export const categoryFormFields: IFormField[] = [
  {
    id: "name",
    type: "text",
    title: "Name",
    description: "Name of the category",
    placeholder: "Enter category name",
  },
  {
    id: "description",
    type: "text",
    title: "Description",
    description: "Description of the category",
    placeholder: "Enter category description",
  },
  {
    id: "coverImage",
    type: "text",
    title: "Cover Image",
    description: "Cover image of the category",
    placeholder: "Enter category cover image",
  },
];
