export const setThemeStorage = (theme: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
  }
};

export const getThemeStorage = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  }
  return "light";
};
