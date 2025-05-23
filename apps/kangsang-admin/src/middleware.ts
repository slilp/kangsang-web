import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { validatePublicPage, validateNoAuthPage } from "./utils/middleware";

const authMiddleware = withAuth(
  function onSuccess(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }: any) => {
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default async function middleware(req: NextRequest) {
  const isPublicPage = validatePublicPage(req.nextUrl.pathname);
  //validate after login should not access this pages
  if (validateNoAuthPage(req.nextUrl.pathname)) {
    const token = await getToken({ req });
    if (!!token) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.next();
    }
  }
  if (isPublicPage) {
    return NextResponse.next();
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Match all pages except API routes, static files, etc.
};
