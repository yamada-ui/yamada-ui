export const ACCEPT_TYPES = {
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  exe: "application/vnd.microsoft.portable-executable",
  gif: "image/gif",
  html: "text/html",
  jpeg: "image/jpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  pdf: "application/pdf",
  png: "image/png",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  svg: "image/svg+xml",
  txt: "text/plain",
  webp: "image/webp",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  zip: "application/zip",
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
