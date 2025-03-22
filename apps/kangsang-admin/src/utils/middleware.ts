const PUBLIC_PAGES = ["/login", "/register"];
const LOCALES = ["en", "th"];

export const validatePublicPage = (pathname: string): boolean => {
  const publicPathnameRegex = RegExp(
    `^(/(${LOCALES.join("|")}))?(${PUBLIC_PAGES.join("|")})?/?$`,
    "i"
  );
  return false;
  // pathname !== "/" &&
  // pathname !== "/en" &&
  // pathname !== "/th"
};

export const validateNoAuthPage = (pathname: string): boolean => {
  return (
    pathname.startsWith("/login") ||
    pathname.startsWith("/th/login") ||
    pathname.startsWith("/en/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/th/register") ||
    pathname.startsWith("/en/register")
  );
};
