export default async function uploadFile({
  file,
  fileParameter,
  uploadUrl,
  job_id,
}: {
  file: File;
  fileParameter: Record<string, string>;
  uploadUrl: string;
  job_id: string;
}) {
  console.log("uploading file");
  const formData = new FormData();
  for (const [key, value] of Object.entries(fileParameter)) {
    formData.append(key, value);
  }
  formData.append("file", file);
  console.log("running file upload");
  try {
    const response = await fetch(uploadUrl, { method: "POST", body: formData });
    if (response.ok) {
      console.log("returned job_id from successful upload");
      return { job_id: job_id };
    }
    throw new Error("file upload failed");
  } catch (error) {
    console.log(error);
    return { job_id: null };
  }
}
