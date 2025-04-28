export const convertBase64ToFile = (
  base64String: string,
  fileName: string
): File => {
  if (base64String.split(",").length >= 1) {
    const byteCharacters = atob(base64String.split(",")[1] || "");
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const fileType =
      base64String.match(/data:(.*?);base64/)?.[1] ||
      "application/octet-stream";
    return new File([byteArray], fileName, { type: fileType });
  }

  return new File([], fileName, { type: "application/octet-stream" });
};
