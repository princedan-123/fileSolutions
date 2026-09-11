export type ActionDetails = {
  description: string;
};
export type ActionType = {
  editPdf: ActionDetails;
  compressPdf: ActionDetails;
  signPdf: ActionDetails;
  mergePdf: ActionDetails;
  pdfToImage: ActionDetails;
  splitPdf: ActionDetails;
  pdfToDoc: ActionDetails;
};
const pdfActions: ActionType = {
  editPdf: {
    description: "Edit PDF file",
  },
  compressPdf : {
    description : "Compress PDF file"
},
signPdf : {
  description : "Sign PDF file"
},
mergePdf : {
  description : "Merge PDF file"
},
pdfToImage : {
  description : "Convert PDF file to Image"
},
pdfToDoc : {
  description : "Convert PDF file to Doc file"
},
splitPdf : {
  description : "Split PDF file"
}
};
export default pdfActions