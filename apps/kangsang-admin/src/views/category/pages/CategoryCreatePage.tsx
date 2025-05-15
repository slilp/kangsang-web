"use client";

//main
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  CircularProgress,
  ContentBox,
  FullPage,
  Typography,
} from "kangsang-mui";
import { useAppDispatch } from "@/redux/hook";

//component
import InputForm from "@/components/Form/InputForm";
import {
  categoryFormFields,
  CategoryFormType,
  categoryFormValidationSchema,
} from "../utils/categoryForm";

//util
import { openSnackbar } from "@/redux/snackbar";
import { convertBase64ToFile } from "@/utils/imageConverter";

//service
import useMutateUploadImg from "@/hooks/useMutateUploadImg";
import useMutateCreateCategory from "../hooks/useMutateCreateCategory";

interface CategoryCreatePageProps {
  initialData?: {
    id: string;
    name: string;
    description: string;
    coverImage: string;
  };
}

function CategoryCreatePage({ initialData }: CategoryCreatePageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const resolver: Resolver<CategoryFormType> = yupResolver(
    categoryFormValidationSchema()
  );

  const { handleSubmit, control, getValues } = useForm<CategoryFormType>({
    resolver,
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      coverImage: initialData?.coverImage || "",
    },
  });

  const createCategoryMutate = useMutateCreateCategory({
    onSuccess: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "You have successfully create new category",
          severity: "success",
        })
      );
      router.push("/category/view");
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to create category, please try again",
          severity: "error",
        })
      );
    },
  });

  const uploadImgMutate = useMutateUploadImg({
    onSuccess: ({ imageUrl }) => {
      createCategoryMutate.mutate({
        name: getValues("name"),
        description: getValues("description"),
        coverImage: imageUrl,
      });
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to create category, please try again",
          severity: "error",
        })
      );
    },
  });

  const onSubmitForm = (data: CategoryFormType) => {
    uploadImgMutate.mutate({
      folderName: "category",
      file: convertBase64ToFile(data.coverImage, "coverImage"),
    });
  };

  const isLoading = uploadImgMutate.isPending || createCategoryMutate.isPending;

  return (
    <FullPage component="form">
      <Typography variant="h6">
        {!!initialData ? "Edit" : "Create New"} Category
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is the page where you can {!!initialData ? "edit" : "create"} a
        category.
      </Typography>
      <ContentBox display="flex" flexDirection="column" gap={2} p={2} mt={2}>
        {categoryFormFields.map((field) => (
          <InputForm
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
      </ContentBox>
      <Box
        display="flex"
        justifyContent="center"
        mt={2}
        onClick={handleSubmit(onSubmitForm)}
      >
        <Button
          type="button"
          variant="contained"
          disabled={isLoading}
          sx={{ minWidth: "100px" }}
        >
          {isLoading ? <CircularProgress size="20px" /> : "Submit"}
        </Button>
      </Box>
    </FullPage>
  );
}

export default CategoryCreatePage;
