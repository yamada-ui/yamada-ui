import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import { PanelGroup } from "react-resizable-panels"
import type { UseResizableProps } from "./use-resizable"
import { ResizableProvider, useResizable } from "./use-resizable"

type ResizableOptions = {
  containerRef?: ForwardedRef<HTMLDivElement>
}

export type ResizableProps = Omit<HTMLUIProps<"div">, "direction"> &
  ThemeProps<"Resizable"> &
  Omit<UseResizableProps, "ref"> &
  ResizableOptions

export const Resizable = forwardRef<ResizableProps, "div">(
  ({ direction = "horizontal", ...props }, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("Resizable", {
      direction,
      ...props,
    })
    const { className, children, containerRef, ...rest } =
      omitThemeProps(mergedProps)
    const { getContainerProps, getGroupProps } = useResizable({ ref, ...rest })

    const css: CSSUIObject = { w: "full", h: "full", ...styles.container }

    return (
      <ResizableProvider value={{ styles }}>
        <ui.div
          className={cx("ui-resizable", className)}
          __css={css}
          {...getContainerProps({}, containerRef)}
        >
          <PanelGroup {...getGroupProps()}>{children}</PanelGroup>
        </ui.div>
      </ResizableProvider>
    )
  },
)
