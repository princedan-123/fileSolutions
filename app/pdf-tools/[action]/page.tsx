import UploadCard from "@/app/components/UploadCard";
import pdfActions from "@/app/components/pdf-actions";

export default async function Action({
  params,
}: {
  params: Promise<{ action: string }>;
}) {
  const { action } = await params;

  const description = pdfActions[action];

  return (
    <section>
      <div className="bg-background flex flex-col items-center p-3 md:flex-row md:justify-evenly gap-7">
        <UploadCard description={description} />
      </div>
    </section>
  );
}
