import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import { PanelGroup } from "react-resizable-panels"
import type { UseResizableProps } from "./use-resizable"
import { ResizableProvider, useResizable } from "./use-resizable"

interface ResizableOptions {
  /**
   * Ref for resizable container element.
   */
  containerRef?: ForwardedRef<HTMLDivElement>
}

/**
 * `Resizable` is accessible resizable panel groups and layouts with keyboard support.
 *
 * @see Docs https://yamada-ui.com/components/data-display/resizable
 */
export interface ResizableProps
  extends Omit<HTMLUIProps, "direction">,
    ThemeProps<"Resizable">,
    Omit<UseResizableProps, "ref">,
    ResizableOptions {}

export const Resizable = forwardRef<ResizableProps, "div">(
  ({ direction = "horizontal", ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Resizable", {
      direction,
      ...props,
    })
    const { className, children, containerRef, ...computedProps } =
      omitThemeProps(mergedProps)
    const { getContainerProps, getGroupProps, ...rest } = useResizable({
      ref,
      ...computedProps,
    })

    const css: CSSUIObject = { w: "100%", h: "100%", ...styles.container }

    return (
      <ResizableProvider value={{ styles, ...rest }}>
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
