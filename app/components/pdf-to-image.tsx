"use client";
import UploadFile from "./uploadFile";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import pdfToJpeg from "../utilities/pdf-to-jpg";
import SetImages from "./setImages";
import validateFile from "../utilities/file-validation";

export default function PdfToImage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedFile, setProcessedFile] = useState<string[] | string | null>(
    null,
  );

  const cardText = "PDF to JPEG Image";
  useEffect(() => {
    if (selectedFile) {
      pdfToJpeg(selectedFile)
        .then((result) => {
          setProcessedFile(result);
        })
        .catch((error) => {
          setProcessedFile(error);
        });
    }
    return;
  }, [selectedFile]);
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
          className="bg-[#007Bff] w-full h-12 py-3 px-6 rounded-lg text-base text-white font-bold"
        >
          Upload file
        </button>
      </form>
      <div className="text-center text-gray-600">or drag file</div>
      {Array.isArray(processedFile) && selectedFile != null ? (
        <SetImages images={processedFile} file={selectedFile} />
      ) : (
        ""
      )}
    </div>
  );
}
