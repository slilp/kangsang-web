export interface CreateCategoryRequest {
  name: string;
  description: string;
  coverImage: string;
}

export interface EditCategoryRequest extends CreateCategoryRequest {
  id: string;
}

export interface ICategoryInfo {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  updatedAt: string;
}

export interface IPagination {
  limit: number;
  page: number;
  totalRecords: number;
}

export interface ListCategoryResponse {
  data: ICategoryInfo[];
  pagination: IPagination;
}
