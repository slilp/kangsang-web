export const extractCategoryPath = (url: string) => {
  try {
    const urlObject = new URL(url);
    const pathname = urlObject.pathname;
    const parts = pathname.split("/");
    const categoryIndex = parts.indexOf("category");
    if (categoryIndex !== -1 && categoryIndex + 1 < parts.length) {
      return `${parts[categoryIndex]}/${parts[categoryIndex + 1]}`;
    }
    return null;
  } catch (error) {
    return null;
  }
};
