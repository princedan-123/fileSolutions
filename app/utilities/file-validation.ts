export default function validateFile(file: File): boolean {
  const fileName = file.name;
  const mimeType = file.type;
  if (fileName.endsWith(".pdf") || mimeType === "application/pdf") return true;
  return false;
}
