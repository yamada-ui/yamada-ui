import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string"
import { parseAsString, useQueryState } from "nuqs"
import { useCallback } from "react"

const DEFAULT_CODE = `import { useState } from "react"
import { VStack, Text, Button, Input } from "@yamada-ui/react"

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <VStack gap="md" p="lg" bg="white">
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to Yamada UI Playground!
      </Text>

      <VStack gap="sm">
        <Text fontSize="lg">Counter: {count}</Text>
        <Button
          colorScheme="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </Button>
      </VStack>

      <VStack gap="sm">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        {name ? (
          <Text fontSize="lg">
            Hello, {name}!
          </Text>
        ) : null}
      </VStack>
    </VStack>
  )
}`

export function usePlaygroundCode() {
  const [compressedCode, setCompressedCode] = useQueryState(
    "code",
    parseAsString.withDefault("").withOptions({
      history: "replace",
      scroll: false,
      throttleMs: 500,
    }),
  )

  const code: string =
    compressedCode && compressedCode !== ""
      ? decompressFromEncodedURIComponent(compressedCode) || DEFAULT_CODE
      : DEFAULT_CODE

  const setCode = useCallback(
    (newCode: string) => {
      if (newCode === DEFAULT_CODE) {
        setCompressedCode(null)
      } else {
        setCompressedCode(compressToEncodedURIComponent(newCode))
      }
    },
    [setCompressedCode],
  )

  const resetCode = useCallback(() => {
    setCode(DEFAULT_CODE)
  }, [setCode])

  return [code, setCode, resetCode] as const
}
