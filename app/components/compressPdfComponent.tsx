"use client";
import UploadFile from "./uploadFile";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import FileReady from "./fileReady";
import { compressPdf } from "../utilities/compressPdf";
type DownloadInfoObject = {
  downloadUrl: string;
  fileName: string;
};

export default function CompressPdfComponent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<DownloadInfoObject | null>(
    null,
  );
  const cardText = "Compress PDF File";
  console.log(`this is ${progress}`);
  useEffect(() => {
    if (selectedFile) {
      compressPdf(selectedFile, setProgress).then((result) =>
        setDownloadInfo(result),
      );
    }
    return;
  }, [selectedFile]);
  return (
    <div
      onDrop={async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setSelectedFile(event.dataTransfer.files[0]);
      }}
      onDragOver={(event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      }}
      className="flex flex-col justify-between items-center gap-4.5 shadow-[0px_4px_6px_1px_rgba(0,0,0,0.1)] p-6 w-full max-w-sm "
    >
      <p className="font-semibold text-xl p-2 text-center">{cardText}</p>
      <UploadFile />

      <form className="px-2 w-full flex justify-center">
        <input
          type="file"
          accept=".pdf,application/pdf"
          hidden
          ref={fileInputRef}
          onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedFile(event.target.files?.[0] ?? null);
          }}
        />
        <button
          type="button"
          onClick={() => {
            fileInputRef.current?.click();
          }}
          className="bg-[#007Bff] w-full h-12 py-3 px-6 rounded-lg text-base text-white font-bold"
        >
          Upload file
        </button>
      </form>
      <div className="text-center text-gray-600">or drag file</div>
      <div>{progress > 0 ? `compressing... ${progress}%` : ""}</div>
      {downloadInfo?.downloadUrl && <FileReady downloadInfo={downloadInfo} />}
    </div>
  );
}
