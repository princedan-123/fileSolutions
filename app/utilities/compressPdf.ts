import { compress } from "@quicktoolsone/pdf-compress";
export async function compressPdf(file: File, setProgress) {
  const fileBuffer = await file.arrayBuffer();
  try {
    const compressedFile = await compress(fileBuffer, {
      preset: "lossless",
      onProgress: (event) => {
        console.log(event.progress);
        setProgress(event.progress);
      },
    });
    if (compressedFile) {
      const fileBlob = new Blob([compressedFile.pdf], {
        type: "application/pdf",
      });
      return {
        downloadUrl: URL.createObjectURL(fileBlob),
        fileName: file.name,
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
}
