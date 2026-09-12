import PdfToImage from "../components/pdf-to-image";

export default function ConvertToImage() {
  return (
    <section>
      <div className="bg-background flex flex-col items-center p-3 md:flex-row md:justify-evenly gap-7">
        <PdfToImage />
      </div>
    </section>
  );
}
