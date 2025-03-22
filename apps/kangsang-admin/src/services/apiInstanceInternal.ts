axios;
import authOptions from "@/utils/authOptions";
import axios, { AxiosInstance } from "axios";
import { getServerSession } from "next-auth";

const apiInstanceInternal = async (
  contentType = "application/json"
): Promise<AxiosInstance> => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_SERVICE_URL,
    headers: {
      "content-type": contentType,
      Authorization: `Bearer ${user?.accessToken}`,
    },
  });
};

export default apiInstanceInternal;
