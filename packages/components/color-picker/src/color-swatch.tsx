import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { cx, isString } from "@yamada-ui/utils"

const defaultOverlays = (
  background: CSSUIProps["color"],
  withShadow: boolean,
): HTMLUIProps[] => {
  const overlays: HTMLUIProps[] = [
    {
      bgImage:
        "linear-gradient(45deg, $checkers 25%, transparent 25%), linear-gradient(-45deg, $checkers 25%, transparent 25%), linear-gradient(45deg, transparent 75%, $checkers 75%), linear-gradient(-45deg, $body 75%, $checkers 75%)",
      bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
      bgSize: `8px 8px`,
      vars: [
        {
          name: "checkers",
          token: "colors",
          value: ["blackAlpha.300", "whiteAlpha.300"],
        },
        {
          name: "body",
          token: "colors",
          value: ["whiteAlpha.500", "blackAlpha.500"],
        },
      ],
    },
    { background },
  ]

  if (withShadow)
    overlays.push({
      boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
    })

  return overlays
}

interface ColorSwatchOptions {
  /**
   * The color used for the swatch element.
   *
   * @default "#ffffff00"
   */
  color?: CSSUIProps["color"]
  /**
   * If `true`, the color swatch will be perfectly round. Else, it'll be slightly round.
   *
   * @default false
   */
  fullRounded?: boolean
  /**
   * If `true`, the color swatch will be perfectly round. Else, it'll be slightly round.
   *
   * @default false
   *
   * @deprecated Use `fullRounded` instead.
   */
  isRounded?: boolean
  /**
   * The overlay used for the swatch element.
   */
  overlays?: HTMLUIProps[]
  /**
   * If `true`, the swatch element has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
}

export interface ColorSwatchProps
  extends Omit<HTMLUIProps, "color">,
    ThemeProps<"ColorSwatch">,
    ColorSwatchOptions {}

/**
 * `ColorSwatch` is a component that displays color samples.
 *
 * @see Docs https://yamada-ui.com/components/data-display/color-swatch
 */
export const ColorSwatch = forwardRef<ColorSwatchProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("ColorSwatch", props)
  const {
    className,
    color = "#ffffff00",
    isRounded,
    fullRounded = isRounded,
    withShadow = true,
    overlays = defaultOverlays(color, withShadow),
    __css,
    ...rest
  } = omitThemeProps(mergedProps)
  const css: CSSUIObject = {
    "& > *": {
      alignItems: "center",
      bottom: "0",
      display: "flex",
      h: "100%",
      justifyContent: "center",
      left: "0",
      overflow: "hidden",
      position: "absolute",
      right: "0",
      top: "0",
      w: "100%",
    },
    position: "relative",
    _before: {
      content: `""`,
      display: "block",
      h: 0,
      pb: "100%",
    },
    ...styles.container,
    ...__css,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-color-swatch", className)}
      aria-label={isString(color) ? color : undefined}
      aria-roledescription="color swatch"
      role="img"
      {...(fullRounded ? { rounded: "fallback(full, 9999px)" } : {})}
      __css={css}
      {...rest}
    >
      <ui.div {...(fullRounded ? { rounded: "fallback(full, 9999px)" } : {})}>
        {overlays.map((props, index) => (
          <ui.div
            key={index}
            __css={{
              bottom: 0,
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
              ...styles.overlay,
            }}
            {...(fullRounded ? { rounded: "fallback(full, 9999px)" } : {})}
            {...props}
          />
        ))}
      </ui.div>
    </ui.div>
  )
})

ColorSwatch.displayName = "ColorSwatch"
ColorSwatch.__ui__ = "ColorSwatch"
