import type { ReactNode } from "react"
import type { CSSObject, HTMLUIProps, StyleValue } from "../../core"
import type { ColorSwatchProps } from "./color-swatch"
import { forwardRef, ui } from "../../core"
import { cx, replaceObject } from "../../utils"
import { ColorSwatch } from "./color-swatch"
import { useColorSelectorContext } from "./use-color-selector"

interface ColorSelectorSwatchesOptions {
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
  swatchesColumns?: StyleValue<number>
  /**
   * The swatches label to use.
   */
  swatchesLabel?: ReactNode
  /**
   * Props for the swatches container element.
   */
  swatchesContainerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for the color swatch component.
   */
  swatchProps?: ColorSwatchProps
}

export interface ColorSelectorSwatchesProps
  extends Omit<HTMLUIProps, "children">,
    ColorSelectorSwatchesOptions {}

export const ColorSelectorSwatches = forwardRef<
  ColorSelectorSwatchesProps,
  "div"
>(
  (
    {
      className,
      swatches,
      swatchesColumns,
      swatchesLabel,
      swatchesContainerProps,
      swatchProps,
      ...rest
    },
    ref,
  ) => {
    const { readOnly, styles, getSwatchProps } = useColorSelectorContext()

    const css: CSSObject = {
      display: "grid",
      gridTemplateColumns: replaceObject(swatchesColumns, (value) =>
        value != null ? `repeat(${value}, minmax(0, 1fr))` : undefined,
      ),
      ...styles.swatches,
    }

    return swatches?.length ? (
      <ui.div {...swatchesContainerProps}>
        {swatchesLabel ? (
          <ui.p
            className="ui-color-selector__swatches__label"
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
              key={color}
              as="button"
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

ColorSelectorSwatches.displayName = "ColorSelectorSwatches"
ColorSelectorSwatches.__ui__ = "ColorSelectorSwatches"
