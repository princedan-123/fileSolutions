import heroImage from "@/app/images/hero_image.jpg";
import Image from "next/image";
import UploadFile from "./components/uploadFile";
import PdfTools from "./components/pdfTools";
import UploadCard from "./components/UploadCard";

export default function RootPage() {
  return (
    <section className="p-3">
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
        <div className="font-bold text-black text-2xl md:text-xl p-2 text-center md:order-2">
          Manage, Edit, Convert and Compress files Seamlessly
          <p className="text-gray-600 text-xl p-4 text-center md:text-lg">
            All-in-One PDF tools for everyone
          </p>
        </div>
      </div>
      {/* End of hero section */}
      <h3 className="section-header">ALL PDF TOOLS</h3>
      <PdfTools />
      <section className="bg-[#EBF1F6] p-4">
        <h3 className="section-header md:text-center">
          How To Use FileSolutions
        </h3>
        <ol className="list-decimal list-inside marker:font-bold marker:text-4xl marker:text-[#6C757D]  md:flex md:justify-evenly">
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
