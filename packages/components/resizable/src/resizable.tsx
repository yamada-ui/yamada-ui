import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ForwardedRef } from "react"
import type { UseResizableProps } from "./use-resizable"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { PanelGroup } from "react-resizable-panels"
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
  ({ direction = "horizontal", orientation = direction, ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Resizable", {
      direction,
      orientation,
      ...props,
    })
    const { className, children, containerRef, ...computedProps } =
      omitThemeProps(mergedProps)
    const { getContainerProps, getGroupProps, ...rest } = useResizable({
      ref,
      ...computedProps,
    })

    const css: CSSUIObject = { h: "100%", w: "100%", ...styles.container }

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

Resizable.displayName = "Resizable"
Resizable.__ui__ = "Resizable"
