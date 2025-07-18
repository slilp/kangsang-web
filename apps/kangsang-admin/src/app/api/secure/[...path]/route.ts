import apiInstanceSecure from "@/services/apiInstanceSecure";
import { NextRequest, NextResponse } from "next/server";

const getPathAndQuery = (req: NextRequest) => {
  const url = new URL(req.url);
  const path = url.pathname.replace("/api", "");
  const query = Object.fromEntries(url.searchParams.entries());
  return { path, query };
};

export async function GET(req: NextRequest) {
  const { path, query } = getPathAndQuery(req);
  const apiInstance = await apiInstanceSecure(req);

  try {
    const response = await apiInstance.get(path, { params: query });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return handleError(error);
  }
}

export async function POST(req: NextRequest) {
  const { path } = getPathAndQuery(req);
  const contentType = req.headers.get("Content-Type");
  let body: any;
  if ((contentType || "application/json").startsWith("multipart/form-data")) {
    body = await req.formData();
  } else if (contentType === "application/json") {
    body = await req.json();
  }

  const apiInstance = await apiInstanceSecure(
    req,
    contentType || "application/json"
  );

  try {
    const response = await apiInstance.post(path, body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return handleError(error);
  }
}

export async function PUT(req: NextRequest) {
  const { path } = getPathAndQuery(req);
  const body = await req.json();
  const apiInstance = await apiInstanceSecure(req);

  try {
    const response = await apiInstance.put(path, body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return handleError(error);
  }
}

export async function PATCH(req: NextRequest) {
  const { path } = getPathAndQuery(req);
  const body = await req.json();
  const apiInstance = await apiInstanceSecure(req);

  try {
    const response = await apiInstance.patch(path, body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return handleError(error);
  }
}

export async function DELETE(req: NextRequest) {
  const { path } = getPathAndQuery(req);
  const apiInstance = await apiInstanceSecure(req);

  try {
    const response = await apiInstance.delete(path);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return handleError(error);
  }
}

function handleError(error: any) {
  if (error.response) {
    // Axios error
    const status = error.response.status || 500;
    const data = error.response.data || { error: "Internal Server Error" };
    return NextResponse.json(data, { status });
  } else {
    // Non-Axios error
    return NextResponse.json({ error: "Unexpected Error" }, { status: 500 });
  }
}
