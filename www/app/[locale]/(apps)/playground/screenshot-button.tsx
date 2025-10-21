"use client"

import {
  CameraIcon,
  CheckIcon,
  IconButton,
  Menu,
  Tooltip,
  useNotice,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"

type ScreenshotTarget = "both" | "code" | "preview"

const SCREENSHOT_TIMEOUT = 3000
const CHECK_ICON_DURATION = 2000

export function ScreenshotButton() {
  const t = useTranslations("playground")
  const notice = useNotice({ duration: 2000 })
  const [copied, setCopied] = useState(false)

  const captureIframeScreenshot = useCallback(
    async (iframe: HTMLIFrameElement): Promise<Blob> => {
      return new Promise((resolve, reject) => {
        const handler = (event: MessageEvent) => {
          if (event.origin !== window.location.origin) return

          if (event.data.type === "screenshot-result") {
            window.removeEventListener("message", handler)
            fetch(event.data.dataUrl)
              .then((res) => res.blob())
              .then(resolve)
              .catch(reject)
          } else if (event.data.type === "screenshot-error") {
            window.removeEventListener("message", handler)
            reject(new Error(event.data.message))
          }
        }

        window.addEventListener("message", handler)

        setTimeout(() => {
          window.removeEventListener("message", handler)
          reject(new Error("Screenshot timeout"))
        }, SCREENSHOT_TIMEOUT)

        iframe.contentWindow?.postMessage({ type: "screenshot" }, "*")
      })
    },
    [],
  )

  const captureElementScreenshot = useCallback(
    async (element: HTMLElement): Promise<Blob> => {
      const { toBlob } = await import("html-to-image")

      const blob = await toBlob(element, { pixelRatio: 2 })

      if (!blob) throw new Error("Failed to create blob")

      return blob
    },
    [],
  )

  const copyToClipboard = useCallback(async (blob: Blob) => {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
  }, [])

  const showSuccess = useCallback(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), CHECK_ICON_DURATION)
  }, [])

  const takeScreenshot = useCallback(
    async (target: ScreenshotTarget) => {
      try {
        const element = document.querySelector<HTMLElement>(
          `[data-screenshot="${target}"]`,
        )

        if (!element) {
          notice({ status: "error", title: t("screenshot.error") })
          return
        }

        let blob: Blob

        if (target === "preview") {
          const iframe = element.querySelector("iframe")
          if (iframe?.contentWindow) {
            blob = await captureIframeScreenshot(iframe)
          } else {
            blob = await captureElementScreenshot(element)
          }
        } else {
          blob = await captureElementScreenshot(element)
        }

        await copyToClipboard(blob)
        showSuccess()
        notice({ status: "success", title: t("screenshot.success") })
      } catch (error) {
        console.error("Screenshot error:", error)
        notice({ status: "error", title: t("screenshot.error") })
      }
    },
    [
      captureElementScreenshot,
      captureIframeScreenshot,
      copyToClipboard,
      notice,
      showSuccess,
      t,
    ],
  )

  return (
    <Menu.Root>
      <Tooltip content={t("screenshot.tooltip")}>
        <Menu.Trigger>
          <IconButton
            size="sm"
            variant="subtle"
            aria-label={t("screenshot.tooltip")}
            icon={copied ? <CheckIcon /> : <CameraIcon />}
          />
        </Menu.Trigger>
      </Tooltip>

      <Menu.Content>
        <Menu.Item onClick={() => takeScreenshot("code")}>
          {t("screenshot.code")}
        </Menu.Item>
        <Menu.Item onClick={() => takeScreenshot("preview")}>
          {t("screenshot.preview")}
        </Menu.Item>
        <Menu.Item onClick={() => takeScreenshot("both")}>
          {t("screenshot.both")}
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  )
}
