import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { validatePublicPage, validateNoAuthPage } from "./src/utils/middleware";
import { routing } from "./src/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
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
    }
  }
  console.log("isPublicPage", isPublicPage);
  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
