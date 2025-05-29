import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ColorSwatchStyle } from "./color-swatch.style"
import { createSlotComponent, styled, varAttr } from "../../core"
import { isString } from "../../utils"
import { colorSwatchStyle } from "./color-swatch.style"

const defaultOverlays = (
  background: CSSProps["color"],
  withShadow: boolean,
): HTMLStyledProps[] => {
  const overlays: HTMLStyledProps[] = [
    {
      "--body": varAttr(["whiteAlpha.500", "blackAlpha.500"], "colors"),
      "--checkers": varAttr(["blackAlpha.300", "whiteAlpha.300"], "colors"),
      bgImage:
        "linear-gradient(45deg, {checkers} 25%, transparent 25%), linear-gradient(-45deg, {checkers} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, {checkers} 75%), linear-gradient(-45deg, {body} 75%, {checkers} 75%)",
      bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
      bgSize: `8px 8px`,
    },
    { background },
  ]

  if (withShadow)
    overlays.push({
      boxShadow: "inner",
    })

  return overlays
}

export interface ColorSwatchProps
  extends Omit<HTMLStyledProps, "color">,
    ThemeProps<ColorSwatchStyle> {
  /**
   * The color used for the swatch element.
   *
   * @default "#ffffff00"
   */
  color?: CSSProps["color"]
  /**
   * The overlay used for the swatch element.
   */
  overlays?: HTMLStyledProps[]
  /**
   * If `true`, the swatch element has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
}

export const {
  PropsContext: ColorSwatchPropsContext,
  usePropsContext: useColorSwatchPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ColorSwatchProps, ColorSwatchStyle>(
  "color-swatch",
  colorSwatchStyle,
)

/**
 * `ColorSwatch` is a component that displays color samples.
 *
 * @see https://yamada-ui.com/components/color-swatch
 */
export const ColorSwatch = withProvider<"div", ColorSwatchProps>(
  ({
    children,
    color = "#ffffff00",
    withShadow = true,
    overlays = defaultOverlays(color, withShadow),
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
        {overlays.map((props, index) => (
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
