"use client"

import type { Dispatch, RefCallback, SetStateAction } from "react"
import dynamic from "next/dynamic"
import { useCallback, useRef } from "react"

import { Flex, noop, Resizable, useBreakpoint } from "@yamada-ui/react"

import { CopyButton } from "@/components/copy-button"
import { usePlaygroundCode } from "../use-playground-code"
import { usePlaygroundReverse } from "../use-playground-reverse"
import { LightEditor } from "./light-editor"
import { Preview } from "./preview"

const MonacoEditor = dynamic(
  () => import("./monaco-editor").then((mod) => mod.MonacoEditor),
  { ssr: false },
)

interface Size {
  height: number
  width: number
}

interface PlaygroundEditorProps {
  nodeModulesJson: string
}

export function PlaygroundEditor({ nodeModulesJson }: PlaygroundEditorProps) {
  const [code, setCode] = usePlaygroundCode()
  const [reverse] = usePlaygroundReverse()
  const breakPoint = useBreakpoint()
  const setSizeRef = useRef<Dispatch<SetStateAction<Size>>>(noop)
  const monaco = !["md", "sm"].includes(breakPoint)

  const previewRef = useCallback<RefCallback<HTMLElement>>((node) => {
    if (!node) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height, width } = entry.contentRect
        setSizeRef.current({
          height: Math.round(height),
          width: Math.round(width),
        })
      }
    })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  const editorComponent = (
    <Resizable.Item defaultSize={50} flex="1" minSize={30} position="relative">
      {monaco ? (
        <MonacoEditor
          data-screenshot="code"
          code={code}
          nodeModulesJson={nodeModulesJson}
          onCodeChange={setCode}
        />
      ) : (
        <LightEditor
          data-screenshot="code"
          code={code}
          onCodeChange={setCode}
        />
      )}
      <CopyButton
        position="absolute"
        right="4"
        top="1.125rem"
        value={code}
        zIndex={2}
      />
    </Resizable.Item>
  )

  const previewComponent = (
    <Resizable.Item defaultSize={50} display="flex" flex="1" minSize={30}>
      <Flex
        bg="bg"
        borderWidth="1px"
        flex="1"
        flexDirection="column"
        gap="md"
        p="md"
        rounded="md"
        w="full"
      >
        {/* <Flex alignItems="center" justifyContent="space-between">
          <PixelSizeDisplay setSizeRef={setSizeRef} />
          <Show when={wide}>
            <LayoutControls />
          </Show>
        </Flex> */}
        <Preview
          data-screenshot="preview"
          code={code}
          previewRef={previewRef}
        />
      </Flex>
    </Resizable.Item>
  )

  return (
    <Resizable.Root
      variant="spacer"
      data-screenshot="both"
      alignItems="stretch"
      display="flex"
      h="full"
      orientation={{ base: "horizontal", md: "vertical" }}
      w="full"
    >
      {reverse ? (
        <>
          {previewComponent}
          <Resizable.Trigger />
          {editorComponent}
        </>
      ) : (
        <>
          {editorComponent}
          <Resizable.Trigger />
          {previewComponent}
        </>
      )}
    </Resizable.Root>
  )
}

// interface PixelSizeDisplayProps {
//   setSizeRef: RefObject<Dispatch<SetStateAction<Size>>>
// }

// const PixelSizeDisplay = ({ setSizeRef }: PixelSizeDisplayProps) => {
//   const mounted = useMounted({ state: true })
//   const [size, setSize] = useState<Size>({ height: 0, width: 0 })
//   assignRef(setSizeRef, setSize)

//   if (!mounted) return <Spacer />

//   return (
//     <Box
//       bg="blackAlpha.600"
//       color="white"
//       fontSize="xs"
//       px="sm"
//       py="xs"
//       rounded="md"
//     >
//       {size.width} × {size.height}
//     </Box>
//   )
// }
