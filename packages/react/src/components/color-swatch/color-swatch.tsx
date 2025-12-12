"use client"

import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ColorSwatchStyle } from "./color-swatch.style"
import { createSlotComponent, styled } from "../../core"
import { isString } from "../../utils"
import { colorSwatchStyle } from "./color-swatch.style"

export const checkersProps: HTMLStyledProps = {
  bgImage: [
    "linear-gradient(45deg, {checkers-fg} 25%, transparent 25%)",
    "linear-gradient(-45deg, {checkers-fg} 25%, transparent 25%)",
    "linear-gradient(45deg, transparent 75%, {checkers-fg} 75%)",
    "linear-gradient(-45deg, {checkers-bg} 75%, {checkers-fg} 75%)",
  ].join(", "),
  bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
  bgSize: `8px 8px`,
}

const defaultLayers = (
  background: CSSProps["color"],
  withShadow: boolean,
): HTMLStyledProps[] => {
  const layers: HTMLStyledProps[] = [checkersProps, { background }]

  if (withShadow) layers.push({ boxShadow: "inner" })

  return layers
}

export interface ColorSwatchProps
  extends Omit<HTMLStyledProps, "color">, ThemeProps<ColorSwatchStyle> {
  /**
   * The color used for the swatch element.
   *
   * @default '#ffffff00'
   */
  color?: CSSProps["color"]
  /**
   * The overlay used for the swatch element.
   */
  layers?: HTMLStyledProps[]
  /**
   * If `true`, the swatch element has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
}

const {
  PropsContext: ColorSwatchPropsContext,
  usePropsContext: useColorSwatchPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ColorSwatchProps, ColorSwatchStyle>(
  "color-swatch",
  colorSwatchStyle,
)

export { ColorSwatchPropsContext, useColorSwatchPropsContext }

/**
 * `ColorSwatch` is a component that displays color samples.
 *
 * @see https://yamada-ui.com/docs/components/color-swatch
 */
export const ColorSwatch = withProvider<"div", ColorSwatchProps>(
  ({
    children,
    color = "#ffffff00",
    withShadow = true,
    layers = defaultLayers(color, withShadow),
    ...rest
  }) => {
    return (
      <styled.div
        aria-label={isString(color) ? color : undefined}
        aria-roledescription="color swatch"
        role="img"
        {...rest}
      >
        {children}
        {layers.map((props, index) => (
          <ColorSwatchOverlay key={index} {...props} />
        ))}
      </styled.div>
    )
  },
  "root",
)()

export interface ColorSwatchOverlayProps extends HTMLStyledProps {}

export const ColorSwatchOverlay = withContext<"div", ColorSwatchOverlayProps>(
  "div",
  "overlay",
)()
