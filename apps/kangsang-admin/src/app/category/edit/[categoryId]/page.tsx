import categoryApi from "@/services/category";
import CategoryCreatePage from "@/views/category/pages/CategoryCreatePage";
import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export default async function CategoryEdit(
  { params }: { params: { categoryId: string } },
  request: NextRequest
) {
  //TODO : handle loading and error
  let data;
  try {
    data = await categoryApi.getById(request, (await params).categoryId);
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
