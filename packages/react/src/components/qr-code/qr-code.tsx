"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { QrCodeStyle } from "./qr-code.style"
import type { UseQrCodeProps, UseQrCodeReturn } from "./use-qr-code"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useSplitChildren } from "../../utils"
import { qrCodeStyle } from "./qr-code.style"
import { useQrCode } from "./use-qr-code"

interface ComponentContext
  extends Pick<
      UseQrCodeReturn,
      "getFrameProps" | "getOverlayProps" | "getPatternProps"
    >,
    Pick<QrCodeRootProps, "patternProps"> {}

export interface QrCodeRootProps
  extends Omit<HTMLStyledProps, "border" | "invert">,
    ThemeProps<QrCodeStyle>,
    UseQrCodeProps {
  /**
   * Props for the frame component.
   */
  frameProps?: QrCodeFrameProps
  /**
   * Props for the pattern component.
   */
  patternProps?: QrCodePatternProps
}

const {
  ComponentContext,
  PropsContext: QrCodePropsContext,
  useComponentContext,
  usePropsContext: useQrCodePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<QrCodeRootProps, QrCodeStyle, ComponentContext>(
  "qr-code",
  qrCodeStyle,
)

export { QrCodePropsContext, useQrCodePropsContext }

/**
 * `QrCode` is a component that displays a QR code.
 *
 * @see https://yamada-ui.com/docs/components/qr-code
 */
export const QrCodeRoot = withProvider<"div", QrCodeRootProps>(
  ({ children, frameProps, patternProps, ...rest }) => {
    const { getFrameProps, getOverlayProps, getPatternProps, getRootProps } =
      useQrCode(rest)
    const [omittedChildren, customFrame] = useSplitChildren(
      children,
      QrCodeFrame,
    )
    const context = useMemo(
      () => ({ getFrameProps, getOverlayProps, getPatternProps, patternProps }),
      [getFrameProps, getOverlayProps, getPatternProps, patternProps],
    )

    return (
      <ComponentContext value={context}>
        <styled.div {...getRootProps()}>
          {customFrame ?? <QrCodeFrame {...frameProps} />}
          {omittedChildren}
        </styled.div>
      </ComponentContext>
    )
  },
  "root",
)()

export interface QrCodeFrameProps extends HTMLStyledProps<"svg"> {}

export const QrCodeFrame = withContext<"svg", QrCodeFrameProps>(
  ({ children, ...rest }) => {
    const { getFrameProps, patternProps } = useComponentContext()
    const [omittedChildren, customPattern] = useSplitChildren(
      children,
      QrCodePattern,
    )

    return (
      <styled.svg {...getFrameProps(rest)}>
        {customPattern ?? <QrCodePattern {...patternProps} />}
        {omittedChildren}
      </styled.svg>
    )
  },
  "frame",
)()

export interface QrCodePatternProps extends HTMLStyledProps<"path"> {}

export const QrCodePattern = withContext<"path", QrCodePatternProps>(
  "path",
  "pattern",
)(undefined, (props) => {
  const { getPatternProps } = useComponentContext()

  return getPatternProps(props)
})

export interface QrCodeOverlayProps extends HTMLStyledProps {}

export const QrCodeOverlay = withContext<"div", QrCodeOverlayProps>(
  "div",
  "overlay",
)(undefined, (props) => {
  const { getOverlayProps } = useComponentContext()

  return getOverlayProps(props)
})
