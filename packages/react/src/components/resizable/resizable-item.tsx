import type { ForwardedRef } from "react"
import type { UseResizableItemProps } from "./use-resizable"
import { Panel } from "react-resizable-panels"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useResizableContext, useResizableItem } from "./use-resizable"

const panelProps = new Set(["order"])

const UIPanel = ui(Panel, { disableStyleProp: (prop) => panelProps.has(prop) })

interface ResizableItemOptions {
  /**
   * Ref for resizable item inner element.
   */
  innerRef?: ForwardedRef<HTMLDivElement>
}

export interface ResizableItemProps
  extends Omit<UseResizableItemProps, "ref">,
    ResizableItemOptions {}

export const ResizableItem = forwardRef<ResizableItemProps, "div">(
  (
    {
      className,
      boxSize,
      children,
      h,
      height,
      innerRef,
      maxH,
      maxHeight,
      maxW,
      maxWidth,
      minH,
      minHeight,
      minW,
      minWidth,
      w,
      width,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useResizableContext()
    const { getItemProps, getPanelProps } = useResizableItem({
      ref,
      ...rest,
    })

    return (
      <UIPanel
        {...getPanelProps({
          boxSize,
          h,
          height,
          maxH,
          maxHeight,
          maxW,
          maxWidth,
          minH,
          minHeight,
          minW,
          minWidth,
          w,
          width,
        })}
      >
        <ui.div
          className={cx("ui-resizable__item", className)}
          __css={styles.item}
          {...getItemProps({}, innerRef)}
        >
          {children}
        </ui.div>
      </UIPanel>
    )
  },
)

ResizableItem.displayName = "ResizableItem"
ResizableItem.__ui__ = "ResizableItem"
