import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string"
import { createParser, createSerializer, parseAsStringLiteral } from "nuqs"

const parseCompressedCode = createParser({
  parse: decompressFromEncodedURIComponent,
  serialize: compressToEncodedURIComponent,
})

export const playgroundSearchParams = {
  code: parseCompressedCode,
  layout: parseAsStringLiteral(["preview-first"]),
}

export const serializePlaygroundSearchParams = createSerializer(
  playgroundSearchParams,
)
