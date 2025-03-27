export const validateMainMenuPath = (currentPath: string, menuPath: string) => {
  const pathRegex = new RegExp(`^${menuPath}(/.*)?$`, "i");
  return currentPath === menuPath || pathRegex.test(currentPath);
};

export function validateSubMenuPath(
  currentPath: string,
  subMenuPath: string
): boolean {
  return currentPath === subMenuPath;
}
