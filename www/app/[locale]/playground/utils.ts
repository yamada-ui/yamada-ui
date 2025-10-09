import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string"

export const DEFAULT_CODE = `function Demo() {
  const notice = useNotice()

  return (
    <VStack gap="md">
      <Button onClick={() => notice({ title: "Hello World!" })}>Click me</Button>
      <Text>Hello Yamada UI</Text>
    </VStack>
  )
}`

export function decodeCode(value: null | string): null | string {
  if (!value) {
    return null
  }

  try {
    return decompressFromEncodedURIComponent(value)
  } catch {
    return null
  }
}

export function encodeCode(value: string): string {
  return compressToEncodedURIComponent(value)
}
