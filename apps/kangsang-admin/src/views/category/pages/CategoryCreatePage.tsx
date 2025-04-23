"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { Box, Button, ContentBox, FullPage, Typography } from "kangsang-mui";

// util
import {
  categoryFormFields,
  CategoryFormType,
  categoryFormValidationSchema,
} from "../utils/categoryForm";
import InputForm from "@/components/Form/InputForm";

function CategoryCreatePage() {
  const resolver: Resolver<CategoryFormType> = yupResolver(
    categoryFormValidationSchema()
  );

  const { handleSubmit, control } = useForm<CategoryFormType>({
    resolver,
  });

  const onSubmitForm = (data: CategoryFormType) => {};

  return (
    <FullPage component="form">
      <Typography variant="h6">Create New Category</Typography>
      <Typography variant="body2" color="text.secondary">
        This is the page where you can create a new category.
      </Typography>
      <ContentBox display="flex" flexDirection="column" gap={2} sx={{ mt: 2 }}>
        {categoryFormFields.map((field) => (
          <InputForm
            key={field.id}
            id={field.id}
            control={control}
            title={field.title}
            description={field.description}
            placeholder={field.placeholder}
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
        <Button type="button" variant="contained">
          Submit
        </Button>
      </Box>
    </FullPage>
  );
}

export default CategoryCreatePage;
