export default function DownloadDocFile({
  downloadUrl,
}: {
  downloadUrl: string;
}) {
  return (
    <button>
      <a className="button-primary" href={downloadUrl} download>
        Download
      </a>
    </button>
  );
}
