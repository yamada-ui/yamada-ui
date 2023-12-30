import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ColorPickerProvider } from "./use-color-picker"

type ColorPickerOptions = {}

export type ColorPickerProps = HTMLUIProps<"div"> &
  ThemeProps<"ColorPicker"> &
  ColorPickerOptions

export const ColorPicker = forwardRef<ColorPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ColorPicker", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {}

  return (
    <ColorPickerProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-color-picker", className)}
        __css={css}
        {...rest}
      />
    </ColorPickerProvider>
  )
})
