import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps, Token } from "@yamada-ui/core"
import { cx, replaceObject } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import type { ColorSwatchProps } from "./color-swatch"
import { ColorSwatch } from "./color-swatch"
import { useColorSelectorContext } from "./use-color-selector"

type ColorSelectorSwatchesOptions = {
  /**
   * The swatches label to use.
   */
  swatchesLabel?: ReactNode
  /**
   * An array of colors in one of the supported formats.
   * Used to render swatches list below the color selector.
   */
  swatches?: string[]
  /**
   * Number of swatches grid columns.
   *
   * @default 7
   */
  swatchesColumns?: Token<number>
  /**
   * Props for the color swatch component.
   */
  swatchProps?: ColorSwatchProps
  /**
   * Props for the swatches container element.
   */
  swatchesContainerProps?: Omit<HTMLUIProps<"div">, "children">
}

export type ColorSelectorSwatchesProps = Omit<HTMLUIProps<"div">, "children"> &
  ColorSelectorSwatchesOptions

export const ColorSelectorSwatches = forwardRef<
  ColorSelectorSwatchesProps,
  "div"
>(
  (
    {
      className,
      swatchesLabel,
      swatches,
      swatchesContainerProps,
      swatchProps,
      swatchesColumns,
      ...rest
    },
    ref,
  ) => {
    const { getSwatchProps, readOnly, styles } = useColorSelectorContext()

    const css: CSSUIObject = {
      display: "grid",
      gridTemplateColumns: replaceObject(swatchesColumns, (value) =>
        value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
      ) as CSSUIObject["gridTemplateColumns"],
      ...styles.swatches,
    }

    return swatches?.length ? (
      <ui.div {...swatchesContainerProps}>
        {swatchesLabel ? (
          <ui.p
            className="ui-color-selector__swatches-label"
            __css={{ ...styles.swatchesLabel }}
          >
            {swatchesLabel}
          </ui.p>
        ) : null}

        <ui.div
          ref={ref}
          className={cx("ui-color-selector__swatches", className)}
          __css={css}
          {...rest}
        >
          {swatches.map((color) => (
            <ColorSwatch
              as="button"
              key={color}
              __css={{
                boxSize: "100%",
                pointerEvents: readOnly ? "none" : undefined,
                ...styles.swatch,
              }}
              {...getSwatchProps({ color, ...swatchProps })}
            />
          ))}
        </ui.div>
      </ui.div>
    ) : null
  },
)
