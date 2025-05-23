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

//component
import InputForm from "@/components/Form/InputForm";
import {
  categoryFormFields,
  CategoryFormType,
  categoryFormValidationSchema,
} from "../utils/categoryForm";

//util
import { convertBase64ToFile } from "@/utils/imageConverter";
import { extractCategoryPath } from "../utils/categoryPath";

//service
import useMutateUploadImg from "@/hooks/useMutateUploadImg";
import useMutateCreateCategory from "../hooks/useMutateCreateCategory";
import useMutateEditCategory from "../hooks/useMutateEditCategory";

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
      router.push("/category/view");
    },
  });

  const editCategoryMutate = useMutateEditCategory({
    onSuccess: () => {
      router.push("/category/view");
    },
  });

  const uploadImgMutate = useMutateUploadImg({
    onSuccess: ({ imageUrl }) => {
      if (!!initialData) {
        editCategoryMutate.mutate({
          id: initialData.id,
          name: getValues("name"),
          description: getValues("description"),
          coverImage: imageUrl,
        });
      } else {
        createCategoryMutate.mutate({
          name: getValues("name"),
          description: getValues("description"),
          coverImage: imageUrl,
        });
      }
    },
  });

  const onSubmitForm = (data: CategoryFormType) => {
    if (data.coverImage.startsWith("http")) {
      editCategoryMutate.mutate({
        id: initialData?.id || "",
        name: data.name,
        description: data.description,
        coverImage: extractCategoryPath(data.coverImage) || "",
      });
    } else {
      uploadImgMutate.mutate({
        folderName: "category",
        file: convertBase64ToFile(data.coverImage, "coverImage"),
      });
    }
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
