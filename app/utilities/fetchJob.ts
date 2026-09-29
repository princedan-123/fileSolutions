export default async function fetchFormUrl() {
  console.log("running fetch form ");
  const response = await fetch(
    "http://localhost:3000/routes/conversion-routes",
  );
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
}

export async function fetchJobStatus(job_id: string | null) {
  if (!job_id) {
    return null;
  }
  const response = await fetch(`http://localhost:3000/routes/${job_id}`);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
}
