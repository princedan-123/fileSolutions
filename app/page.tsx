import heroImage from "@/app/images/hero_image.jpg";
import Image from "next/image";
import { Inter } from "next/font/google";
import fileUploadIcon from "@/app/icons/file_upload_icon.png";
import editIcon from "@/app/icons/edit.png";
const interFont = Inter({
  subsets: ["latin"],
});
export default function RootPage() {
  return (
    <section className="px-3]">
      <div className="flex flex-col items-center justify-between gap-2.5 bg-[#EBF1F6] p-6">
        <div>
          <Image
            src={heroImage}
            width={853}
            height={768}
            alt="Hero section image"
            className="max-w-md h-auto object-contain"
          />
        </div>
        <h1
          className={`${interFont.className} font-bold text-black text-3xl p-2 text-center`}
        >
          Manage, Edit, Convert and Compress files Seamlessly
        </h1>
        <p
          className={`${interFont.className} text-gray-600 text-xl p-2 text-center`}
        >
          All-in-One PDF tools for everyone
        </p>
        <div className="flex flex-col justify-between items-center gap-4.5 shadow-[0px_4px_6px_1px_rgba(0,0,0,0.1)] p-6 w-full max-w-sm ">
          <p
            className={`${interFont.className} font-semibold text-xl p-2 text-center`}
          >
            Compress, Edit and Convert Files With Ease
          </p>
          <div>
            <Image
              src={fileUploadIcon}
              alt="Upload file icon"
              width={138}
              height={138}
            />
          </div>
          <div className="px-2 w-full flex justify-center">
            <button className="bg-[#007Bff] w-full h-12 py-3 px-6 rounded-lg text-base text-white font-bold">
              Upload file
            </button>
          </div>
          <div className="text-center text-gray-600">or drag file</div>
        </div>
      </div>
      <h3 className="section-header">ALL PDF TOOLS</h3>
      <section className={`${interFont.className} flex flex-col gap-6`}>
        <div className="tools">
          <Image src={editIcon} alt="edit icon" /> Edit PDF
        </div>
        <div className="tools">Compress PDF</div>
        <div className="tools">PDF to Image</div>
        <div className="tools">Organize PDF</div>
        <div className="tools">Split PDF</div>
        <div className="tools">Merge PDF</div>
        <div className="tools">Sign Pdf</div>
        <div className="tools">PDF to TXT</div>
        <div className="tools">PDF to Doc</div>
      </section>
      <section className="bg-[#EBF1F6]">
        <h3 className="section-header">How To Use FileSolutions</h3>
        <ol className="list-decimal list-inside marker:font-bold marker:text-4xl marker:text-[#6C757D]">
          <li className="p-4 font-semibold font-lg text-[#1A1D20] leading-snug">
            Upload your file
          </li>
          <li className="p-4 font-semibold font-lg text-[#1A1D20] leading-snug">
            Select from multiple options
          </li>
          <li className="p-4 font-semibold font-lg text-[#1A1D20] leading-snug">
            download final file
          </li>
        </ol>
      </section>
    </section>
  );
}
