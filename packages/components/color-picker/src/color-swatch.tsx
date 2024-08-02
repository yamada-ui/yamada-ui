import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

const defaultOverlays = (
  background: CSSUIProps["color"],
  withShadow: boolean,
): HTMLUIProps<"div">[] => {
  let overlays: HTMLUIProps<"div">[] = [
    {
      bgImage:
        "linear-gradient(45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--ui-checkers) 75%), linear-gradient(-45deg, var(--ui-body) 75%, var(--ui-checkers) 75%)",
      bgSize: `8px 8px`,
      bgPosition: `0 0, 0 4px, 4px -4px, -4px 0`,
      var: [
        {
          __prefix: "ui",
          name: "checkers",
          token: "colors",
          value: ["blackAlpha.300", "whiteAlpha.300"],
        },
        {
          __prefix: "ui",
          name: "body",
          token: "colors",
          value: ["whiteAlpha.500", "blackAlpha.500"],
        },
      ],
    },
    { background },
  ]

  if (withShadow)
    overlays = [
      ...overlays,
      {
        boxShadow: `rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset`,
      },
    ]

  return overlays
}

type ColorSwatchOptions = {
  /**
   * The color used for the swatch element.
   *
   * @default "#ffffff00"
   */
  color?: CSSUIProps["color"]
  /**
   * The overlay used for the swatch element.
   */
  overlays?: HTMLUIProps<"div">[]
  /**
   * If `true`, the swatch element has an inner `box-shadow`.
   *
   * @default true
   */
  withShadow?: boolean
  /**
   * If `true`, the color swatch will be perfectly round. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
}

export type ColorSwatchProps = Omit<HTMLUIProps<"div">, "color"> &
  ThemeProps<"ColorSwatch"> &
  ColorSwatchOptions

/**
 * `ColorSwatch` is a component that displays color samples.
 *
 * @see Docs https://yamada-ui.com/components/data-display/color-swatch
 */
export const ColorSwatch = forwardRef<ColorSwatchProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ColorSwatch", props)
  const {
    className,
    color = "#ffffff00",
    withShadow = true,
    overlays = defaultOverlays(color, withShadow),
    isRounded,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    position: "relative",
    _before: {
      content: `""`,
      display: "block",
      h: 0,
      pb: "100%",
    },
    "& > *": {
      overflow: "hidden",
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      w: "100%",
      h: "100%",
    },
    ...styles.container,
    ...__css,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-color-swatch", className)}
      {...(isRounded ? { rounded: "fallback(full, 9999px)" } : {})}
      __css={css}
      {...rest}
    >
      <ui.div {...(isRounded ? { rounded: "fallback(full, 9999px)" } : {})}>
        {overlays.map((props, index) => (
          <ui.div
            key={index}
            __css={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...styles.overlay,
            }}
            {...(isRounded ? { rounded: "fallback(full, 9999px)" } : {})}
            {...props}
          />
        ))}
      </ui.div>
    </ui.div>
  )
})
