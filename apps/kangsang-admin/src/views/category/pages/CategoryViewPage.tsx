"use client";

//main
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  ContentBox,
  FullPage,
  IconButton,
  KangsangModal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "kangsang-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

//component
import SearchInputForm from "@/components/Search/SearchInputForm";

//util
import {
  categoryColumns,
  searchCategoryFormFields,
  SearchCategoryFormType,
  searchCategoryFormValidationSchema,
} from "../utils/searchCategoryForm";

//hook
import useFetchListCategory from "../hooks/useQueryListCategory";
import TableHeader from "@/components/Table/TableHeader";
import TableSkeleton from "@/components/Table/TableSkeleton";
import useMutateDeleteCategory from "../hooks/useMutateDeleteCategory";

function CategoryViewPage() {
  const router = useRouter();
  const [delSelected, setDelSelected] = useState<string>("");
  const resolver: Resolver<SearchCategoryFormType> = yupResolver(
    searchCategoryFormValidationSchema()
  );

  const { control, setValue, watch } = useForm<SearchCategoryFormType>({
    resolver,
    defaultValues: {
      page: 0,
      limit: 10,
      orderBy: "updatedAt",
      order: "desc",
    },
  });

  const formValue = watch();

  const {
    data: categoriesData,
    refetch,
    isLoading,
  } = useFetchListCategory({
    page: formValue.page,
    limit: formValue.limit,
    orderBy: `${formValue.orderBy}:${formValue.order}`,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setValue("page", newPage);
  };

  const handleSort = (colId: string, isDesc: boolean) => {
    setValue("orderBy", colId);
    setValue("order", isDesc ? "asc" : "desc");
  };

  const deleteCategoryMutate = useMutateDeleteCategory({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <FullPage component="form">
      <Typography variant="h6">Category</Typography>
      <Typography variant="body2" color="text.secondary">
        This is the page where you can view categories.{formValue.orderBy}
        {formValue.order}
      </Typography>
      <ContentBox mt={2}>
        <Box p={2} display="flex" flexDirection="column" gap={2}>
          {searchCategoryFormFields.map((field) => (
            <SearchInputForm
              key={field.id}
              id={field.id}
              control={control}
              title={field.title}
              description={field.description}
              placeholder={field.placeholder}
              options={field.options?.map((option) => option.label) || []}
              type={field.type}
            />
          ))}
        </Box>

        <Paper>
          <TableContainer>
            <Table>
              <TableHeader
                columns={categoryColumns}
                handleSort={handleSort}
                orderBy={formValue.orderBy}
                orderByDirection={formValue.order}
              />
              {isLoading ? (
                <TableSkeleton
                  rows={formValue.limit}
                  columns={categoryColumns.length}
                />
              ) : (
                <TableBody>
                  {(categoriesData?.data || []).map((row, index) => {
                    return (
                      <TableRow key={`category-${row.id}`}>
                        <TableCell align="center" width="10%">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">
                          <Box
                            component="img"
                            alt="category-img"
                            src={row.coverImage}
                            width="100px"
                          />
                        </TableCell>
                        <TableCell align="center">
                          {new Date(row.updatedAt).toLocaleDateString("en-GB")}
                        </TableCell>
                        <TableCell align="center" width="15%">
                          <Box display="flex" justifyContent="center" gap={1}>
                            <IconButton
                              size="small"
                              sx={{
                                "&:hover": {
                                  color: "success.main",
                                  background: "transparent",
                                },
                              }}
                              onClick={() => {
                                router.push(`/category/edit/${row.id}`);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                scale="xs"
                              />
                            </IconButton>
                            <IconButton
                              size="small"
                              sx={{
                                "&:hover": {
                                  color: "error.main",
                                  background: "transparent",
                                },
                              }}
                              onClick={() => {
                                setDelSelected(row.id + "");
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} scale="xs" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={categoriesData?.pagination.totalRecords || 0}
            rowsPerPage={formValue.limit}
            page={formValue.page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </ContentBox>
      <Box height={50} />
      <KangsangModal
        open={!!delSelected}
        handleClose={() => setDelSelected("")}
        title={`Delete Category : ${delSelected}`}
        description="Are you sure you want to delete this category?"
        handleConfirm={() => {
          deleteCategoryMutate.mutate({ categoryId: delSelected });
          setDelSelected("");
        }}
        txtBtnConfirm="Delete"
        txtBtnCancel="Cancel"
      />
    </FullPage>
  );
}

export default CategoryViewPage;
