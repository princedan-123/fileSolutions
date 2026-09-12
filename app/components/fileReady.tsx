type DownloadInfoObject = {
  downloadUrl: string;
  fileName: string;
};
type Fileprop = {
  downloadInfo: DownloadInfoObject;
};

export default function FileReady({ downloadInfo }: Fileprop) {
  return (
    <div>
      <h3 className="text-center text-black font-bold">File is ready</h3>
      <button className="bg-[#007Bff] w-full h-12 py-3 px-6 rounded-lg text-base text-white font-bold">
        <a
          href={downloadInfo.downloadUrl}
          download={`${downloadInfo.fileName}_compressed`}
        >
          Download File
        </a>
      </button>
    </div>
  );
}
