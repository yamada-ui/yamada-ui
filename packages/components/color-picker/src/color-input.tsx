import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ColorInputProvider } from "./use-color-input"

type ColorInputOptions = {}

export type ColorInputProps = HTMLUIProps<"input"> &
  ThemeProps<"ColorInput"> &
  ColorInputOptions

export const ColorInput = forwardRef<ColorInputProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ColorInput", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {}

  return (
    <ColorInputProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-color-picker", className)}
        __css={css}
        {...rest}
      />
    </ColorInputProvider>
  )
})
