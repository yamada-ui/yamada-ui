"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { QrCodeStyle } from "./qr-code.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { qrCodeStyle } from "./qr-code.style"
import { useQrCode } from "./use-qr-code"

export interface QrCodeRootProps
  extends HTMLStyledProps,
    ThemeProps<QrCodeStyle> {
  /**
   * The value to encode as a QR code.
   */
  value: string
  /**
   * The border width.
   *
   * @default 2
   */
  border?: number
  /**
   * The error correction level.
   * `L` allows for up to 7% error correction,
   * `M` allows for up to 15% error correction,
   * `Q` allows for up to 25% error correction,
   * `H` allows for up to 30% error correction.
   *
   * @default 'L'
   */
  ecc?: "H" | "L" | "M" | "Q"
  /**
   * The pixel size.
   *
   * @default 10
   */
  pixelSize?: number
}

const {
  ComponentContext,
  PropsContext: QrCodePropsContext,
  useComponentContext,
  usePropsContext: useQrCodePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<QrCodeRootProps, QrCodeStyle>("qr-code", qrCodeStyle)

export { QrCodePropsContext, useQrCodePropsContext }

/**
 * `QrCode` is a component that displays a QR code.
 *
 * @see https://yamada-ui.com/docs/components/qr-code
 */
export const QrCodeRoot = withProvider<"div", QrCodeRootProps>(
  ({ border = 2, ecc = "L", pixelSize, value, ...rest }) => {
    const { getFrameProps, getOverlayProps, getPatternProps, getRootProps } =
      useQrCode({ border, ecc, pixelSize, value })

    const context = useMemo(
      () => ({ getFrameProps, getOverlayProps, getPatternProps }),
      [getFrameProps, getOverlayProps, getPatternProps],
    )

    return (
      <ComponentContext value={context}>
        <styled.div {...getRootProps(rest)} />
      </ComponentContext>
    )
  },
  "root",
)()

export interface QrCodeFrameProps
  extends HTMLStyledProps<"svg">,
    ThemeProps<QrCodeStyle> {}

export const QrCodeFrame = withContext<"svg", QrCodeFrameProps>((rest) => {
  const { getFrameProps } = useComponentContext()

  return <styled.svg {...getFrameProps(rest)} />
}, "frame")()

export interface QrCodePatternProps extends HTMLStyledProps<"path"> {}

export const QrCodePattern = withContext<"path", QrCodePatternProps>((rest) => {
  const { getPatternProps } = useComponentContext()
  const { d, ...pathProps } = getPatternProps(rest)

  return (
    <styled.path asChild {...pathProps}>
      <path d={d} />
    </styled.path>
  )
}, "pattern")()

export interface QrCodeOverlayProps extends HTMLStyledProps {}

export const QrCodeOverlay = withContext<"div", QrCodeOverlayProps>((rest) => {
  const { getOverlayProps } = useComponentContext()

  return <styled.div {...getOverlayProps(rest)} />
}, "overlay")()
