import axios from "axios";
import { service } from "../servicePath";

const uploadImage = async ({
  folderName,
  file,
}: {
  folderName: string;
  file: File;
}) => {
  const formData = new FormData();
  formData.append("file", file);

  const resp = await axios.post<{ imageUrl: string }>(
    `${service.secure}/upload-img/${folderName}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return resp.data;
};

const uploadApi = {
  uploadImage,
};

export default uploadApi;
