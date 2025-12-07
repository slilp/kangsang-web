import categoryApi from "@/services/category";
import CategoryCreatePage from "@/views/category/pages/CategoryCreatePage";
import { notFound } from "next/navigation";

interface CategoryEditPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

export default async function CategoryEdit({ params }: CategoryEditPageProps) {
  const { categoryId } = await params;
  let data;
  try {
    data = await categoryApi.getById(categoryId);
  } catch {
    return notFound();
  }

  return (
    <CategoryCreatePage
      initialData={{
        id: data.id + "",
        name: data.name,
        description: data.description,
        coverImage: data.coverImage,
      }}
    />
  );
}
