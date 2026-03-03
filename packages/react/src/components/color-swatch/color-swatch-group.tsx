import type { Component, CSSProps } from "../../core"
import type { ColorSwatchProps } from "./color-swatch"
import { useI18n } from "../../providers/i18n-provider"
import { Grid } from "../grid"
import { ColorSwatch } from "./color-swatch"

export interface ColorSwatchGroupProps extends Omit<ColorSwatchProps, "color"> {
  /**
   * The color used for the swatch element.
   *
   * @default '#ffffff00'
   */
  items?: CSSProps["color"][]
  /**
   * The props for the `ColorSwatch` component.
   */
  itemProps?: ColorSwatchProps
}

/**
 * `ColorSwatchGroup` is a component that displays color samples.
 *
 * @see https://yamada-ui.com/docs/components/color-swatch
 */
export const ColorSwatchGroup = (({
  items = [],
  layers,
  withShadow = true,
  itemProps,
  ...rest
}: ColorSwatchGroupProps) => {
  const { t } = useI18n("colorSwatch")

  if (items.length > 4)
    console.warn("ColorSwatchGroup: doesn't support more than 4 items")

  const empty = items.length === 0
  const threeColors = items.length === 3

  if (empty) {
    return (
      <ColorSwatch
        aria-label={t("Color swatch group")}
        layers={layers}
        overflow="hidden"
        withShadow={withShadow}
        {...rest}
      />
    )
  } else {
    return (
      <ColorSwatch
        aria-label={t("Color swatch group")}
        layers={withShadow ? [{ boxShadow: "inner" }] : []}
        {...rest}
      >
        <Grid templateColumns="repeat(2, 1fr)">
          {items.map((color, index) => (
            <ColorSwatch
              key={index}
              boxSize="inherit"
              color={color}
              gridColumn={threeColors && !index ? "1 / 3" : undefined}
              rounded="0"
              w={threeColors && !index ? "unset" : undefined}
              withShadow={false}
              {...itemProps}
            />
          ))}
        </Grid>
      </ColorSwatch>
    )
  }
}) as Component<"div", ColorSwatchGroupProps>
