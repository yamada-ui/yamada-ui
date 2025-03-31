import type { ForwardedRef } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseResizableProps } from "./use-resizable"
import { PanelGroup } from "react-resizable-panels"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx } from "../../utils"
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
 * @see https://yamada-ui.com/components/data-display/resizable
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

    return (
      <ResizableProvider value={{ styles, ...rest }}>
        <ui.div
          className={cx("ui-resizable", className)}
          __css={styles.container}
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
