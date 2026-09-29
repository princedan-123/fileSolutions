export default function PdfToDocError({ error }: { error: Error }) {
  if (error.message === "402") {
    return <p>Sorry free credit exhausted, payment is required</p>;
  }
  return <p>{error.message}</p>;
}
