import Image from "next/image";
import Link from "next/link";
import editIcon from "@/app/icons/edit_larg_screen_icon.png";
import compressIcon from "@/app/icons/compression.png";
import fileToImage from "@/app/icons/picture-as-pdf.png";
import splitFileIcon from "@/app/icons/split.png";
import mergeFileIcon from "@/app/icons/merge.png";
import signFileIcon from "@/app/icons/contract.png";
import fileToTextIcon from "@/app/icons/txt.png";
import pdfToFileIcon from "@/app/icons/doc-file.png";

export default function PdfTools() {
  return (
    <section className="flex flex-col gap-6 p-6 md:grid md:grid-cols-4 lg:grid-cols-5">
      <Link href="/pdf-tools/editPdf" className="tools">
        <Image src={editIcon} alt="edit icon" />
        <span>Edit PDF</span>
      </Link>

      <Link href="../compress-pdf" className="tools">
        <Image src={compressIcon} alt="compress file icon" />
        <span>Compress PDF</span>
      </Link>

      <Link href="../pdf-to-image" className="tools">
        <Image src={fileToImage} alt="file to image icon" />
        <span>PDF to Image</span>
      </Link>

      <Link href="/pdf-tools/splitPdf" className="tools">
        <Image src={splitFileIcon} alt="split file icon" />
        <span>Split PDF</span>
      </Link>

      <Link href="/pdf-tools/mergePdf" className="tools">
        <Image src={mergeFileIcon} alt="merge file icon" />
        <span>Merge PDF</span>
      </Link>

      <Link href="/pdf-tools/signPdf" className="tools">
        <Image src={signFileIcon} alt="sign file icon" />
        <span>Sign PDF</span>
      </Link>

      <Link href="/pdf-tools/pdfToTxt" className="tools">
        <Image src={fileToTextIcon} alt="pdf to txt" />
        <span>PDF to TXT</span>
      </Link>

      <Link href="/pdf-tools/pdfToDoc" className="tools">
        <Image src={pdfToFileIcon} alt="PDF to file" />
        <span>PDF to DOC</span>
      </Link>
    </section>
  );
}
