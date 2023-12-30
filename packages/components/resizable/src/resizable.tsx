import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { ResizableProvider } from "./use-resizable"

type ResizableOptions = {}

export type ResizableProps = HTMLUIProps<"div"> &
  ThemeProps<"Resizable"> &
  ResizableOptions

export const Resizable = forwardRef<ResizableProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Resizable", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {}

  return (
    <ResizableProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-resizable", className)}
        __css={css}
        {...rest}
      />
    </ResizableProvider>
  )
})
