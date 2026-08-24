import heroImage from "@/app/images/hero_image.jpg";
import Image from "next/image";
import { Inter } from "next/font/google";
import fileUploadIcon from "@/app/icons/file_upload_icon.png";
import editIcon from "@/app/icons/edit_larg_screen_icon.png";
import compressIcon from "@/app/icons/compression.png";
import fileToImage from "@/app/icons/picture-as-pdf.png";
import splitFileIcon from "@/app/icons/split.png";
import mergeFileIcon from "@/app/icons/merge.png";
import signFileIcon from "@/app/icons/contract.png";
import fileToTextIcon from "@/app/icons/txt.png";
import pdfToFileIcon from "@/app/icons/doc-file.png";

const interFont = Inter({
  subsets: ["latin"],
});
export default function RootPage() {
  return (
    <section className="p-3 p">
      <div className="flex flex-col items-center justify-between gap-2.5 bg-[#EBF1F6] p-6 md:flex-row">
        <div className="md:order-3">
          <Image
            src={heroImage}
            width={853}
            height={768}
            alt="Hero section image"
            className="max-w-md h-auto object-contain"
          />
        </div>
        <div
          className={`${interFont.className} font-bold text-black text-2xl md:text-xl p-2 text-center md:order-2`}
        >
          Manage, Edit, Convert and Compress files Seamlessly
          <p
            className={`${interFont.className} text-gray-600 text-xl p-2 text-center md:text-lg`}
          >
            All-in-One PDF tools for everyone
          </p>
        </div>

        <div className="flex flex-col justify-between items-center gap-4.5 shadow-[0px_4px_6px_1px_rgba(0,0,0,0.1)] p-6 w-full max-w-sm ">
          <p
            className={`${interFont.className} font-semibold text-xl p-2 text-center`}
          >
            Compress, Edit and Convert Files With Ease
          </p>
          <div className="md:order-1">
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
      </div>{" "}
      {/* End of hero section */}
      <h3 className="section-header">ALL PDF TOOLS</h3>
      <section
        className={`${interFont.className} flex flex-col gap-6 p-6 md:grid grid-cols-4 lg:grid-cols-5`}
      >
        <div className="tools">
          <Image src={editIcon} alt="edit icon" />
          Edit PDF
        </div>
        <div className="tools">
          <Image src={compressIcon} alt="compress file icon" />
          Compress PDF
        </div>
        <div className="tools">
          <Image src={fileToImage} alt=" file to image icon" />
          PDF to Image
        </div>
        <div className="tools">
          <Image src={splitFileIcon} alt="split file icon " /> Split PDF
        </div>
        <div className="tools">
          <Image src={mergeFileIcon} alt="merge file icon" />
          Merge PDF
        </div>
        <div className="tools">
          <Image src={signFileIcon} alt="sign file Icon" />
          Sign Pdf
        </div>
        <div className="tools">
          <Image src={fileToTextIcon} alt="pdf to txt" /> PDF to TXT
        </div>
        <div className="tools">
          <Image src={pdfToFileIcon} alt="PDF to file" />
          PDF to Doc
        </div>
      </section>
      <section className="bg-[#EBF1F6] p-4">
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
