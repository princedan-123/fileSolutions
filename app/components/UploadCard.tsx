"use client";
import UploadFile from "./uploadFile";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import { ActionDetail } from "@/app/components/pdf-actions/";
import { useRef, useState } from "react";
import FileReady from "./fileReady";
import { compressPdf } from "../utilities/pdf-functions";
type DownloadInfoObject = {
  downloadUrl: string;
  fileName: string;
};

export default function UploadCard({ description }: ActionDetail | undefined) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [downloadInfo, setDownloadInfo] = useState<DownloadInfoObject | null>(
    null,
  );

  const cardText = description?.description;
  return (
    <div
      onDrop={async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files[0];
        if (selectedFile) {
          setDownloadInfo(await compressPdf(selectedFile));
        }
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
            const selectedFile = event.target.files?.[0] ?? null;
            if (selectedFile) {
              setDownloadInfo(await compressPdf(selectedFile));
            }
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
      {downloadInfo?.downloadUrl && <FileReady downloadInfo={downloadInfo} />}
    </div>
  );
}
