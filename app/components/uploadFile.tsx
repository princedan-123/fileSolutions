import Image from "next/image";
import fileUploadIcon from "@/app/icons/file_upload_icon.png";
export default function UploadFile() {
  return (
    <div className="md:order-1">
      <Image
        src={fileUploadIcon}
        alt="Upload file icon"
        width={138}
        height={138}
      />
    </div>
  );
}
