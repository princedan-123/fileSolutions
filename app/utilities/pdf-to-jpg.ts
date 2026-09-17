import { pdfToImg } from "pdftoimg-js/browser";

export default async function pdfToJpeg(file: File) {
  try {
    const result = await pdfToImg(URL.createObjectURL(file), {
      imgType: "jpg",
      maxHeight: 1000,
      maxWidth: 1000,
    });
    return result;
  } catch (error) {
    console.log(error);
    return "Error occured during PDF to JPEG conversion";
  }
  return null;
}
