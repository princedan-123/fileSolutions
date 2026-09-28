export async function GET() {
  const cloudConvertUrl: string = "https://api.cloudconvert.com/v2/jobs";
  const testSandboxUrl: string = "https://api.sandbox.cloudconvert.com/v2/jobs";
  const job = {
    tasks: {
      "upload-file": {
        operation: "import/upload",
      },
      "convert-my-file": {
        operation: "convert",
        input_format: "pdf",
        output_format: "doc",
        input: "upload-file",
      },
      "export-my-file": {
        operation: "export/url",
        input: "convert-my-file",
      },
    },
  };
  const apiKey = process.env.CLOUDCONVERTAPIKEY;
  const testKey = process.env.SANDBOXAPIKEY;
  if (!apiKey) {
    return Response.json({ error: "api key is invalid" });
  }
  const fetchPostConfig: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(job),
  };
  try {
    console.log("running job creation");
    const response = await fetch(cloudConvertUrl, fetchPostConfig);
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
