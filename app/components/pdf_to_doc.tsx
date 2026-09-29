"use client";
import UploadFile from "./uploadFile";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import fetchFormUrl, { fetchJobStatus } from "../utilities/fetchJob";
import Image from "next/image";
import uploadFile from "../utilities/fileUpload";
import validateFile from "../utilities/file-validation";
import DownloadDocFile from "./downloadDocFile";
import PdfToDocError from "./pdfToDocErrorComponent";
import { Spokes } from "@/components/loading-ui/spokes";
import { error } from "console";
type FileData = {
  uploadUrl: string;
  file: File;
  fileParameter: Record<string, string>;
  job_id: string;
};
type CloudConvertTask = {
  name: string;
  result?: {
    files?: {
      url: string;
    }[];
  };
};

export default function ConvertPdfToDoc() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [job_id, setJobId] = useState<string | null>(null);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cloudUpload"],
    queryFn: fetchFormUrl,
    enabled: Boolean(selectedFile) && !job_id, // Create cloud job upon file selection
  });
  const jobQuery = useQuery({
    // pooling to check job status
    queryKey: ["job_pooling", job_id],
    queryFn: () => {
      return fetchJobStatus(job_id);
    },
    enabled: Boolean(job_id),
    refetchInterval: (query) => {
      const status = query.state.data?.data?.status;

      if (status === "finished" || status === "error") {
        return false;
      }

      return 2000;
    },
  });
  const tasks = jobQuery.data?.data?.tasks;

  const exportTask = tasks?.find(
    (task: CloudConvertTask) => task.name === "export-my-file",
  );
  const downloadUrl = exportTask?.result?.files?.[0]?.url;
  const fileUpload = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      setJobId(data.job_id); // upload selected file to cloud job
    },
  });
  function handleConvert() {
    if (data && selectedFile) {
      const fileData: FileData = {
        uploadUrl: data?.data?.tasks[0]?.result?.form?.url,
        file: selectedFile,
        fileParameter: data?.data?.tasks[0]?.result?.form?.parameters,
        job_id: data?.data?.tasks[0]?.job_id,
      };
      fileUpload.mutate(fileData);
    }
    return;
  }

  const cardText = "Convert PDF to Doc";
  return (
    <div
      onDrop={async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (!file) return;
        const fileIsValid = validateFile(file);
        if (!fileIsValid) alert("Kindly select a PDF file");
        setSelectedFile(event.dataTransfer.files[0]);
      }}
      onDragOver={(event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      }}
      className="action-card"
    >
      <p className="font-semibold text-xl p-2 text-center">{cardText}</p>
      {isLoading && <p className="animate-pulse">Preparing File Upload...</p>}
      {jobQuery.data?.data?.status == "error" ? (
        <p>
          PDF conversion failed <img src="/sad-face.png" className="mx-auto" />
        </p>
      ) : (
        false
      )}
      {isError && <p>Unable to create file conversion job</p>}
      {isError && error.message === "402" ? (
        <p>Payment required, free credit exhausted</p>
      ) : (
        false
      )}
      {isError && (
        <Image
          src="/warning.png"
          width={32}
          height={32}
          alt="error occured image"
        />
      )}
      <UploadFile />

      <form className="px-2 w-full flex justify-center">
        <input
          type="file"
          accept=".pdf,application/pdf"
          hidden
          ref={fileInputRef}
          onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const fileIsValid = validateFile(file);
            if (!fileIsValid) alert("Kindly select a PDF file");
            setSelectedFile(event.target.files?.[0] ?? null);
          }}
        />
        <button
          type="button"
          onClick={() => {
            fileInputRef.current?.click();
          }}
          className="button-primary"
        >
          Upload file
        </button>
      </form>
      {selectedFile && data ? (
        <button
          disabled={fileUpload.isSuccess}
          hidden={fileUpload.isSuccess}
          onClick={handleConvert}
          className="button-primary space-x-2"
        >
          Convert to Doc
        </button>
      ) : null}
      <div className="text-center text-gray-600">or drag file</div>
      {jobQuery.isFetching && <Spokes />}
      {downloadUrl && <DownloadDocFile downloadUrl={downloadUrl} />}
      {jobQuery.isError && <PdfToDocError error={jobQuery.error} />}
    </div>
  );
}
