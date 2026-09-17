import Link from "next/link";
import { PreviewImageButton } from "./preveiwImage";
import handleDownloadAll from "../utilities/handleDownloadAll";

export default function SetImages({
  images,
  file,
}: {
  images: string[];
  file: File;
}) {
  const imageCount = images.length;

  return (
    <div className="flex flex-col">
      <PreviewImageButton data={images} file={file}/>
      <button
        onClick={() => {
          handleDownloadAll(images, file);
        }}
        className="button-primary mt-4"
      >
        {imageCount === 1 ? "Download" : "Download All"}
      </button>
    </div>
  );
}
