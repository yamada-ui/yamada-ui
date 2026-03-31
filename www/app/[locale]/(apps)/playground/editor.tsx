"use client"

import type { Language, PrismTheme } from "prism-react-renderer"
import type { Ref } from "react"
import type React from "react"
import { Box, Text, useColorMode } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Highlight, themes } from "prism-react-renderer"
import { useCallback, useEffect, useLayoutEffect, useRef } from "react"

const LANGUAGE: Language = "tsx"

const AUTO_CLOSE = {
  '"': '"',
  "'": "'",
  "(": ")",
  "[": "]",
  "`": "`",
  "{": "}",
} as const

interface EditorProps {
  code: string
  onChange: (code: string) => void
  ref?: Ref<HTMLDivElement>
  onFormat?: () => Promise<void>
}

export function Editor({ ref, code, onChange, onFormat }: EditorProps) {
  const t = useTranslations("playground")
  const { colorMode } = useColorMode()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const preRef = useRef<HTMLDivElement>(null)
  const pendingCursorRef = useRef<null | { end: number; start: number }>(null)
  const theme: PrismTheme =
    colorMode === "dark" ? themes.oneDark : themes.oneLight

  useLayoutEffect(() => {
    if (!pendingCursorRef.current || !textareaRef.current) return
    const { end, start } = pendingCursorRef.current
    textareaRef.current.selectionStart = start
    textareaRef.current.selectionEnd = end
    pendingCursorRef.current = null
  })

  const handleChange = useCallback<
    React.ChangeEventHandler<HTMLTextAreaElement>
  >(
    (ev) => {
      onChange(ev.target.value)
    },
    [onChange],
  )

  const syncScroll = useCallback(() => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop
      preRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }, [])

  useEffect(() => {
    syncScroll()
  }, [code, syncScroll])

  const handleKeyDown = useCallback<
    React.KeyboardEventHandler<HTMLTextAreaElement>
  >(
    (ev) => {
      const textarea = textareaRef.current
      if (!textarea) return

      const { selectionEnd: end, selectionStart: start } = textarea
      const modKey = ev.metaKey || ev.ctrlKey
      const INDENT = "  "

      // Ctrl+S / ⌘S: Format
      if (modKey && ev.key === "s") {
        ev.preventDefault()
        void onFormat?.()
        return
      }

      // Tab / Shift+Tab: Indent
      if (ev.key === "Tab") {
        ev.preventDefault()
        if (start === end) {
          if (!ev.shiftKey) {
            document.execCommand("insertText", false, INDENT)
          } else {
            const lineStart = code.lastIndexOf("\n", start - 1) + 1
            const nextNewline = code.indexOf("\n", start)
            const lineEndPos = nextNewline === -1 ? code.length : nextNewline
            const fullLine = code.slice(lineStart, lineEndPos)
            const removeCount = fullLine.match(/^ {1,2}/)?.[0].length ?? 0
            if (removeCount > 0) {
              textarea.selectionStart = lineStart
              textarea.selectionEnd = lineStart + removeCount
              document.execCommand("insertText", false, "")
              pendingCursorRef.current = {
                end: Math.max(lineStart, start - removeCount),
                start: Math.max(lineStart, start - removeCount),
              }
            }
          }
        } else {
          const lineStart = code.lastIndexOf("\n", start - 1) + 1
          const lines = code.slice(lineStart, end).split("\n")

          if (!ev.shiftKey) {
            const newLines = lines.map((l) => INDENT + l)
            const newCode =
              code.slice(0, lineStart) + newLines.join("\n") + code.slice(end)
            onChange(newCode)
            pendingCursorRef.current = {
              end: end + INDENT.length * lines.length,
              start: start + INDENT.length,
            }
          } else {
            const newLines = lines.map((l) => l.replace(/^ {1,2}/, ""))
            const firstDelta =
              (lines[0] ?? "").match(/^ {1,2}/)?.[0]?.length ?? 0
            const totalDelta = lines.reduce(
              (acc, l) => acc + (l.match(/^ {1,2}/)?.[0]?.length ?? 0),
              0,
            )
            const newCode =
              code.slice(0, lineStart) + newLines.join("\n") + code.slice(end)
            onChange(newCode)
            pendingCursorRef.current = {
              end: end - totalDelta,
              start: start - firstDelta,
            }
          }
        }
        return
      }

      const isAutoCloseKey = (key: string): key is keyof typeof AUTO_CLOSE =>
        key in AUTO_CLOSE
      const CLOSE_CHARS = new Set<string>(Object.values(AUTO_CLOSE))

      // Backspace: Remove paired auto-close characters when caret sits between them
      if (ev.key === "Backspace" && !modKey && !ev.altKey) {
        if (start === end && start > 0) {
          const prevChar = code.slice(start - 1, start)
          const nextChar = code.slice(start, start + 1)
          if (isAutoCloseKey(prevChar) && AUTO_CLOSE[prevChar] === nextChar) {
            ev.preventDefault()
            textarea.selectionStart = start - 1
            textarea.selectionEnd = start + 1
            document.execCommand("insertText", false, "")
            pendingCursorRef.current = {
              end: start - 1,
              start: start - 1,
            }
            return
          }
        }
      }

      if (isAutoCloseKey(ev.key) && !modKey && !ev.altKey) {
        ev.preventDefault()
        const close = AUTO_CLOSE[ev.key]
        const selected = code.slice(start, end)

        // Symmetric pairs: skip if next char is already the closing char
        if (!selected && ev.key === close && code[start] === close) {
          textarea.selectionStart = textarea.selectionEnd = start + 1
          return
        }

        if (selected) {
          document.execCommand("insertText", false, ev.key + selected + close)
          pendingCursorRef.current = { end: end + 1, start: start + 1 }
        } else {
          document.execCommand("insertText", false, ev.key + close)
          pendingCursorRef.current = { end: start + 1, start: start + 1 }
        }
        return
      }

      // Skip closing chars for asymmetric pairs
      if (CLOSE_CHARS.has(ev.key) && start === end && code[start] === ev.key) {
        ev.preventDefault()
        textarea.selectionStart = textarea.selectionEnd = start + 1
        return
      }

      // JSX closing tag auto-completion
      if (ev.key === ">") {
        const textBefore = code.slice(0, start)
        const match = textBefore.match(
          /<([a-zA-Z][a-zA-Z0-9.]*)(\s[^<>]*)?\s*$/,
        )
        if (match && !/\/\s*$/.test(match[0])) {
          ev.preventDefault()
          const tagName = match[1]
          document.execCommand("insertText", false, `></${tagName}>`)
          pendingCursorRef.current = { end: start + 1, start: start + 1 }
          return
        }
      }
    },
    [code, onChange, onFormat],
  )

  return (
    <Box
      ref={ref}
      borderBottomWidth={{ base: "0", md: "1px" }}
      borderRightWidth={{ base: "1px", md: "0" }}
      fontFamily="mono"
      h="full"
      overflow="hidden"
      position="relative"
    >
      <Box
        ref={preRef}
        aria-hidden
        bg="bg.panel"
        inset={0}
        overflow="auto"
        p="md"
        pointerEvents="none"
        position="absolute"
      >
        <Highlight code={code} language={LANGUAGE} theme={theme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Box
              data-language={LANGUAGE}
              fontSize="sm"
              minH="full"
              minW="fit-content"
            >
              <Box
                as="pre"
                className={className}
                style={style}
                lineHeight="1.5"
                m={0}
                minH="full"
                minW="fit-content"
              >
                {tokens.map((line, index) => (
                  <Box
                    key={index}
                    minW="fit-content"
                    {...getLineProps({ line })}
                  >
                    {line.map((token, index) => (
                      <Text
                        key={index}
                        as="span"
                        {...getTokenProps({ token })}
                      />
                    ))}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Highlight>
      </Box>
      <Box
        ref={textareaRef}
        as="textarea"
        css={{
          WebkitTextFillColor: "transparent",
        }}
        aria-label={t("codeEditor")}
        bg="transparent"
        border="none"
        caretColor="primary"
        color="transparent"
        fontSize="sm"
        h="full"
        lineHeight="1.5"
        outline="none"
        overflow="auto"
        p="md"
        position="relative"
        resize="none"
        spellCheck={false}
        value={code}
        w="full"
        whiteSpace="pre"
        _focus={{ border: "none", outline: "none" }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onScroll={syncScroll}
      />
    </Box>
  )
}
