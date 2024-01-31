import type { CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import { Panel } from "react-resizable-panels"
import type { UseResizableItemProps } from "./use-resizable"
import { useResizableContext, useResizableItem } from "./use-resizable"

type ResizableItemOptions = {
  /**
   * Ref for resizable item inner element.
   */
  innerRef?: ForwardedRef<HTMLDivElement>
}

export type ResizableItemProps = Omit<UseResizableItemProps, "ref"> &
  ResizableItemOptions

export const ResizableItem = forwardRef<ResizableItemProps, "div">(
  (
    {
      className,
      children,
      innerRef,
      w,
      width,
      minW,
      minWidth,
      maxW,
      maxWidth,
      h,
      height,
      minH,
      minHeight,
      maxH,
      maxHeight,
      boxSize,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useResizableContext()
    const { getPanelProps, getItemProps } = useResizableItem({
      ref,
      ...rest,
    })

    const css: CSSUIObject = { boxSize: "full", ...styles.item }

    return (
      <ui.div
        as={Panel}
        {...getPanelProps({
          w,
          width,
          minW,
          minWidth,
          maxW,
          maxWidth,
          h,
          height,
          minH,
          minHeight,
          maxH,
          maxHeight,
          boxSize,
        })}
      >
        <ui.div
          className={cx("ui-resizable__item", className)}
          __css={css}
          {...getItemProps({}, innerRef)}
        >
          {children}
        </ui.div>
      </ui.div>
    )
  },
)
