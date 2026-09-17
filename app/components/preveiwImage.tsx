"use client";
import { useRouter } from "next/navigation";

type ImageData = {
  data: string[];
  file: File;
};
export function PreviewImageButton({ data, file }: ImageData) {
  const router = useRouter();
  function handleAddImage() {
    const request = indexedDB.open("images", 1);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore("imageStore", { keyPath: "id" });
    };
    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("imageStore", "readwrite");
      const store = transaction.objectStore("imageStore");
      store.put({ id: 1, imageSrc: data, fileObjet: file });
      transaction.oncomplete = () => {
        router.push("/image-preview");
      };
    };
  }
  return (
    <button onClick={handleAddImage} className="button-secondary">
      Preview and Download
    </button>
  );
}
