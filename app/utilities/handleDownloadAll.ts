export default function handleDownloadAll(imageSrc: string[], file: File) {
  imageSrc.forEach((src: string, index: number) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `${file.name.replace(/\.pdf$/i, "")}-page-${index + 1}.jpg`;
    link.click();
  });
}
