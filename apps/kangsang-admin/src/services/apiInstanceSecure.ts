import axios, { AxiosInstance } from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const apiInstanceSecure = async (
  req: NextRequest,
  contentType = "application/json"
): Promise<AxiosInstance> => {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_SERVICE_URL,
    headers: {
      "content-type": contentType,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};

export default apiInstanceSecure;
