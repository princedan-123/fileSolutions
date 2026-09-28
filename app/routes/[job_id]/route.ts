export async function GET(
  request: Request,
  { params }: { params: Promise<{ job_id: string }> },
) {
  const apiKey = process.env.CLOUDCONVERTAPIKEY;
  const testKey = process.env.SANDBOXAPIKEY;
  const { job_id } = await params;
  const testSandboxUrl = `https://api.sandbox.cloudconvert.com/v2/jobs/${job_id}`;
  const jobUrl: string = `https://api.cloudconvert.com/v2/jobs/${job_id}`;
  if (!apiKey || !testKey) {
    return Response.json({ error: "api key is invalid" });
  }

  try {
    const response = await fetch(jobUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return Response.json(data);
    }
    const apiResponse = {
      error: true,
      message: data.message,
    };
    return Response.json(apiResponse, { status: response.status });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "unable to reach server" });
  }
}
