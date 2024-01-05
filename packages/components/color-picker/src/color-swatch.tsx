import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

const defaultOverlays = (
  background: string,
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
   * @default "#00000000"
   */
  color?: string
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
}

export type ColorSwatchProps = Omit<HTMLUIProps<"div">, "color"> &
  ThemeProps<"ColorSwatch"> &
  ColorSwatchOptions

export const ColorSwatch = forwardRef<ColorSwatchProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ColorSwatch", props)
  const {
    className,
    color = "#00000000",
    withShadow = true,
    overlays = defaultOverlays(color, withShadow),
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = { position: "relative", ...styles.container }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-color-swatch", className)}
      __css={css}
      {...rest}
    >
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
          {...props}
        />
      ))}
    </ui.div>
  )
})
