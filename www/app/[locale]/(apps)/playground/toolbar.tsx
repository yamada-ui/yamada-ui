"use client"

import {
  AppWindowIcon,
  ArrowLeftRightIcon,
  ArrowUpDownIcon,
  ButtonGroup,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  HStack,
  LinkIcon,
  Menu,
  RotateCcwIcon,
  Share2Icon,
  Spacer,
  SquareCodeIcon,
  Tooltip,
  useBreakpointValue,
  useNotice,
  WandSparklesIcon,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback, useMemo, useRef, useState } from "react"
import { format } from "./prettier"
import { serializePlaygroundSearchParams } from "./search-params"

interface ToolbarProps {
  code: string
  previewFirst: boolean
  onCodeChange: (code: string) => void
  onReset: () => void
  onScreenshotCode: () => Promise<void>
  onScreenshotUi: () => Promise<void>
  onSwapPanes: () => void
}

export function Toolbar({
  code,
  previewFirst,
  onCodeChange,
  onReset,
  onScreenshotCode,
  onScreenshotUi,
  onSwapPanes,
}: ToolbarProps) {
  const t = useTranslations("playground")
  const { SwapIcon, swapLabel } = useBreakpointValue({
    base: { SwapIcon: ArrowLeftRightIcon, swapLabel: t("swapHorizontal") },
    md: { SwapIcon: ArrowUpDownIcon, swapLabel: t("swapVertical") },
  })

  const [formatted, setFormatted] = useState(false)
  const formatTimerRef = useRef<null | ReturnType<typeof setTimeout>>(null)
  const onFormat = useCallback(async () => {
    try {
      const result = await format(code, { parser: "babel-ts" })
      if (result) onCodeChange(result)
      if (formatTimerRef.current) clearTimeout(formatTimerRef.current)
      setFormatted(true)
      formatTimerRef.current = setTimeout(() => setFormatted(false), 4000)
    } catch {
      // ignore format errors
    }
  }, [code, onCodeChange])

  const onShare = useCallback(async () => {
    try {
      await navigator.share({
        title: document.title,
        url: getShareUrl(code, previewFirst),
      })
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") return
      throw e
    }
  }, [code, previewFirst])

  return (
    <HStack borderBottomWidth="1px" flexShrink={0} gap="sm" px="md" py="sm">
      <ButtonGroup.Root size="sm" variant="ghost" gap="xs">
        <Tooltip content={t("resetCode")}>
          <ButtonGroup.IconItem
            colorScheme="danger"
            aria-label={t("resetCode")}
            disableRipple
            icon={<RotateCcwIcon />}
            onClick={onReset}
          />
        </Tooltip>

        <Tooltip content={swapLabel}>
          <ButtonGroup.IconItem
            aria-label={swapLabel}
            disableRipple
            icon={<SwapIcon />}
            onClick={onSwapPanes}
          />
        </Tooltip>

        <Tooltip content={t("format")}>
          <ButtonGroup.IconItem
            size="sm"
            variant="ghost"
            aria-label={t("format")}
            disableRipple
            icon={formatted ? <CheckIcon /> : <WandSparklesIcon />}
            onClick={onFormat}
          />
        </Tooltip>
      </ButtonGroup.Root>

      <Spacer />

      <CopyMenu
        code={code}
        previewFirst={previewFirst}
        onScreenshotCode={onScreenshotCode}
        onScreenshotUi={onScreenshotUi}
        onShare={onShare}
      />
    </HStack>
  )
}

interface CopyMenuProps {
  code: string
  previewFirst: boolean
  onScreenshotCode: () => Promise<void>
  onScreenshotUi: () => Promise<void>
  onShare: () => Promise<void>
}

function CopyMenu({
  code,
  previewFirst,
  onScreenshotCode,
  onScreenshotUi,
  onShare,
}: CopyMenuProps) {
  const t = useTranslations("playground")
  const notice = useNotice()

  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  const onCopyUrl = useCallback(async () => {
    await navigator.clipboard.writeText(getShareUrl(code, previewFirst))
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    setCopied(true)
    copyTimerRef.current = setTimeout(() => setCopied(false), 4000)
  }, [code, previewFirst])

  const onCopyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    notice({ duration: 2000, status: "success", title: t("copied") })
  }, [code, notice, t])

  const withScreenShotNotice = useCallback(
    (fn: () => Promise<void>) => async () => {
      try {
        await fn()
        notice({
          duration: 2000,
          status: "success",
          title: t("screenshotCopied"),
        })
      } catch {
        notice({
          duration: 2000,
          status: "error",
          title: t("screenshotFailed"),
        })
      }
    },
    [notice, t],
  )

  const handleScreenshotCode = useMemo(
    () => withScreenShotNotice(onScreenshotCode),
    [onScreenshotCode, withScreenShotNotice],
  )

  const handleScreenshotUi = useMemo(
    () => withScreenShotNotice(onScreenshotUi),
    [onScreenshotUi, withScreenShotNotice],
  )

  return (
    <Menu.Root>
      <ButtonGroup.Root size="sm" variant="surface" attached>
        <ButtonGroup.Item
          disableRipple
          startIcon={
            copied ? (
              <CheckIcon color="fg.muted" />
            ) : (
              <LinkIcon color="fg.muted" />
            )
          }
          onClick={onCopyUrl}
        >
          {t("copyUrl")}
        </ButtonGroup.Item>
        <Menu.Trigger>
          <ButtonGroup.IconItem
            aria-label={t("openCopyMenu")}
            disableRipple
            icon={<ChevronDownIcon />}
          />
        </Menu.Trigger>
      </ButtonGroup.Root>

      <Menu.Content color="fg.emphasized">
        {typeof navigator !== "undefined" && "share" in navigator ? (
          <Menu.Item onClick={onShare}>
            <Menu.Indicator>
              <Share2Icon color="fg.muted" />
            </Menu.Indicator>
            {t("share")}
          </Menu.Item>
        ) : null}

        <Menu.Item onClick={onCopyCode}>
          <Menu.Indicator>
            <CodeIcon color="fg.muted" />
          </Menu.Indicator>
          {t("copyCode")}
        </Menu.Item>

        <Menu.Item onClick={handleScreenshotCode}>
          <Menu.Indicator>
            <SquareCodeIcon color="fg.muted" />
          </Menu.Indicator>
          {t("screenshotCode")}
        </Menu.Item>

        <Menu.Item onClick={handleScreenshotUi}>
          <Menu.Indicator>
            <AppWindowIcon color="fg.muted" />
          </Menu.Indicator>
          {t("screenshotUi")}
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  )
}

function getShareUrl(code: string, previewFirst: boolean) {
  const pathWithQuery = serializePlaygroundSearchParams(
    window.location.pathname,
    {
      code,
      layout: previewFirst ? "preview-first" : null,
    },
  )
  return `${window.location.origin}${pathWithQuery}`
}
