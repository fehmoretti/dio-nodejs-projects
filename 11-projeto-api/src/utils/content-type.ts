export enum ContentType {
  // Tipos mais comuns
  JSON = "application/json",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",
  TEXT = "text/plain",
  HTML = "text/html",
  XML = "application/xml",
  JAVASCRIPT = "application/javascript",
  CSS = "text/css",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  ICON = "image/x-icon",
  BMP = "image/bmp",

  // Áudio e vídeo
  MP3 = "audio/mpeg",
  OGG_AUDIO = "audio/ogg",
  WAV = "audio/wav",
  MP4 = "video/mp4",
  OGG_VIDEO = "video/ogg",
  WEBM = "video/webm",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",
  TAR = "application/x-tar",
  RTF = "application/rtf",
  MSWORD = "application/msword",
  EXCEL = "application/vnd.ms-excel",
  POWERPOINT = "application/vnd.ms-powerpoint",
  OPEN_XML_WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  OPEN_XML_EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  OPEN_XML_PRESENTATION = "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  // Outros úteis
  OCTET_STREAM = "application/octet-stream",
  NDJSON = "application/x-ndjson",
  CSV = "text/csv",
  MARKDOWN = "text/markdown",
}