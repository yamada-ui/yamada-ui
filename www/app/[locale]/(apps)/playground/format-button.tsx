"use client"

import {
  Box,
  Button,
  Kbd,
  Tooltip,
  useAsyncCallback,
  useNotice,
  useWindowEvent,
  WandIcon,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { usePlaygroundCode } from "./use-playground-code"

export function FormatButton() {
  const t = useTranslations("playground")
  const [code, setCode] = usePlaygroundCode()
  const notice = useNotice({ duration: 2000 })
  const [loading, handleClick] = useAsyncCallback(async () => {
    try {
      const [prettier, typescript, estree] = await Promise.all([
        import("prettier/standalone").then((mod) => mod.default),
        import("prettier/plugins/typescript").then((mod) => mod.default),
        import("prettier/plugins/estree").then((mod) => mod.default),
      ])

      const formatted = await prettier.format(code, {
        parser: "typescript",
        plugins: [typescript, estree],
        semi: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "all",
      })

      setCode(formatted.trim())
      notice({ status: "success", title: t("formatted") })
    } catch (error) {
      console.error("Formatting error:", error)
    }
  }, [code, setCode])

  useWindowEvent(
    "keydown",
    (ev) => {
      if ((ev.metaKey || ev.ctrlKey) && ev.key === "s") {
        ev.preventDefault()
        handleClick()
      }
    },
    { passive: false },
  )

  return (
    <Tooltip content={t("format")}>
      <Button
        size="sm"
        variant="subtle"
        aria-label={t("format")}
        loading={loading}
        onClick={handleClick}
      >
        <WandIcon />
        <Box display={{ base: "block", md: "none" }} fontSize="xs">
          <Kbd size="sm">⌘</Kbd>+<Kbd size="sm">S</Kbd>
        </Box>
      </Button>
    </Tooltip>
  )
}
