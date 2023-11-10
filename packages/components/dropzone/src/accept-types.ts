export const ACCEPT_TYPES = {
  txt: "text/plain",
  html: "text/html",
  csv: "text/csv",
  png: "image/png",
  gif: "image/gif",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  webp: "image/webp",
  mp3: "audio/mpeg",
  mpeg: "video/mpeg",
  mp4: "video/mp4",
  zip: "application/zip",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  exe: "application/vnd.microsoft.portable-executable",
} as const

export const IMAGE_ACCEPT_TYPE = [
  ACCEPT_TYPES.png,
  ACCEPT_TYPES.gif,
  ACCEPT_TYPES.jpeg,
  ACCEPT_TYPES.svg,
  ACCEPT_TYPES.webp,
]
export const PDF_ACCEPT_TYPE = [ACCEPT_TYPES.pdf]
export const MS_WORD_ACCEPT_TYPE = [ACCEPT_TYPES.doc, ACCEPT_TYPES.docx]
export const MS_EXCEL_ACCEPT_TYPE = [ACCEPT_TYPES.xls, ACCEPT_TYPES.xlsx]
export const MS_POWER_POINT_ACCEPT_TYPE = [ACCEPT_TYPES.ppt, ACCEPT_TYPES.pptx]
export const EXE_ACCEPT_TYPE = [ACCEPT_TYPES.exe]
