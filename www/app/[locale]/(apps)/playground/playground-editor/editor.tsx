"use client"

import type { BoxProps } from "@yamada-ui/react"
import type { PrismTheme } from "prism-react-renderer"
import type {
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  UIEventHandler,
} from "react"
import { Box, styled, useColorMode } from "@yamada-ui/react"
import { Highlight, themes } from "prism-react-renderer"
import { useCallback, useRef } from "react"
import { usePlaygroundCode } from "../use-playground-code"

interface EditorProps extends BoxProps {}

export const Editor = ({ ...rest }: EditorProps) => {
  const [code, setCode] = usePlaygroundCode()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (ev) => {
      setCode(ev.target.value)
    },
    [setCode],
  )

  const handleScroll = useCallback<UIEventHandler<HTMLTextAreaElement>>(
    (ev) => {
      if (highlightRef.current) {
        highlightRef.current.scrollLeft = ev.currentTarget.scrollLeft
        highlightRef.current.scrollTop = ev.currentTarget.scrollTop
      }
    },
    [],
  )

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLTextAreaElement>>(
    (ev) => {
      if ((ev.ctrlKey || ev.metaKey) && ev.key === "z" && !ev.shiftKey) {
        return
      }

      if (
        (ev.ctrlKey || ev.metaKey) &&
        (ev.key === "y" || (ev.key === "z" && ev.shiftKey))
      ) {
        return
      }

      if (ev.key === "Tab") {
        handleTabKey(ev, code)
      }
    },
    [code],
  )

  return (
    <Box h="full" overflow="hidden" position="relative" {...rest}>
      <Box
        ref={highlightRef}
        aria-hidden
        bg="bg.panel"
        h="full"
        overflow="auto"
        py="lg"
      >
        <CodeBlock code={code} />
      </Box>

      <styled.textarea
        ref={textareaRef}
        css={{
          "& ::selection": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            WebkitTextFillColor: "transparent",
          },
          caretColor: "var(--ui-colors-primary)",
          overflow: "auto",
          WebkitTextFillColor: "transparent",
        }}
        aria-label="Code Editor"
        bg="transparent"
        border="none"
        bottom="0"
        color="white"
        fontFamily="monospace"
        fontSize="sm"
        h="full"
        left="0"
        lineHeight="1.5"
        outline="none"
        pl="calc(var(--ui-spaces-lg) + 1.3em)"
        position="absolute"
        pr="lg"
        py="lg"
        resize="none"
        right="0"
        spellCheck={false}
        top="0"
        value={code}
        w="full"
        whiteSpace="pre"
        zIndex={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
      />
    </Box>
  )
}

function handleTabKey(ev: KeyboardEvent<HTMLTextAreaElement>, code: string) {
  ev.preventDefault()
  const target = ev.currentTarget
  const start = target.selectionStart
  const end = target.selectionEnd

  const beforeCursor = code.substring(0, start)
  const lineStart = beforeCursor.lastIndexOf("\n") + 1

  const afterCursor = code.substring(end)
  const lineEndOffset = afterCursor.indexOf("\n")
  const lineEnd = lineEndOffset === -1 ? code.length : end + lineEndOffset

  const selectedLines = code.substring(lineStart, lineEnd)
  const lines = selectedLines.split("\n")

  let newLines: string[]
  let newStart = start
  let newEnd = end

  if (ev.shiftKey) {
    newLines = lines.map((line) => {
      if (line.startsWith("  ")) {
        return line.substring(2)
      }
      return line
    })

    const firstLineRemoved = lines[0]?.startsWith("  ") ? 2 : 0
    newStart = Math.max(lineStart, start - firstLineRemoved)

    const totalRemoved = lines.reduce((acc, line) => {
      return acc + (line.startsWith("  ") ? 2 : 0)
    }, 0)
    newEnd = end - totalRemoved
  } else {
    newLines = lines.map((line) => "  " + line)

    newStart = start + 2
    newEnd = end + lines.length * 2
  }

  const newSelection = newLines.join("\n")

  target.focus()
  target.setSelectionRange(lineStart, lineEnd)
  document.execCommand("insertText", false, newSelection)

  setTimeout(() => {
    target.selectionStart = newStart
    target.selectionEnd = newEnd
  }, 0)
}

interface CodeBlockProps {
  code: string
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  const { colorMode } = useColorMode()
  const theme: PrismTheme =
    colorMode === "dark" ? themes.oneDark : themes.oneLight
  return (
    <Highlight code={code} language="tsx" theme={theme}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          bg="transparent"
          fontFamily="monospace"
          fontSize="sm"
          lineHeight="1.5"
          m="0"
        >
          {tokens.map((line, i) => (
            <Box key={i} {...getLineProps({ line })}>
              <Box
                as="span"
                display="inline-block"
                mr="0.5em"
                opacity={0.5}
                textAlign="right"
                userSelect="none"
                w="2.5em"
              >
                {i + 1}
              </Box>
              {line.map((token, key) => (
                <Box key={key} as="span" {...getTokenProps({ token })} />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Highlight>
  )
}
