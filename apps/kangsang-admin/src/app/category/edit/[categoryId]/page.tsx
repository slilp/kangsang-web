import categoryApi from "@/services/category";
import CategoryCreatePage from "@/views/category/pages/CategoryCreatePage";
import { notFound } from "next/navigation";

export default async function CategoryEdit({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  //TODO : handle loading and error
  let data;
  try {
    data = await categoryApi.getById((await params).categoryId);
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
