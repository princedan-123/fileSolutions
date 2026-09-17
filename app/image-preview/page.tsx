"use client";
import { useEffect, useState } from "react";
import { Spokes } from "@/components/loading-ui/spokes";
import handleDownloadAll from "../utilities/handleDownloadAll";

type ImageStoreData = {
  id: number;
  imageSrc: string[];
  fileObjet: File;
};
export default function PreviewImagePage() {
  const [imageData, setImageData] = useState<ImageStoreData | null>(null);
  useEffect(() => {
    const request = indexedDB.open("images", 1);
    request.onsuccess = () => {
      const transaction = request.result.transaction("imageStore", "readonly");
      const dbStore = transaction.objectStore("imageStore");
      const getResult = dbStore.get(1);
      getResult.onsuccess = () => {
        setImageData(getResult.result);
      };
    };
  });
  if (imageData === null) {
    return (
      <div className="flex flex-col items-center justify-center w-full py-8 min-h-screen bg-gray-200">
        <Spokes className="size-20 text-blue-600" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div>
        <section className="mb-8 flex items-center flex-col justify-between gap-3">
          <header className="p-4 space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">PDF Preview</h1>

            <p className="mt-1 text-sm text-gray-500">
              Preview the pages generated from your PDF.
            </p>
            <button
              onClick={() => {
                handleDownloadAll(imageData.imageSrc, imageData.fileObjet);
              }}
              className="button-primary"
            >
              {imageData.imageSrc.length > 1 ? "Download All" : "Download"}
            </button>
          </header>
          <section className="flex flex-col items-center lg:flex-row w-full h-full justify-evenly gap-3">
            {imageData.imageSrc.map((imgSrc: string, index: number) => {
              return (
                <div key={index} className="mb-3">
                  <img src={imgSrc} alt="pdf-image" />
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </div>
  );
}
