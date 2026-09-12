import CompressPdfComponent from "../components/compressPdfComponent";

export default function CompressPDF() {
  return (
    <section>
      <div className="bg-background flex flex-col items-center p-3 md:flex-row md:justify-evenly gap-7">
        <CompressPdfComponent />
      </div>
    </section>
  );
}
