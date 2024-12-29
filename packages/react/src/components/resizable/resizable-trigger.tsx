import type { ReactElement, RefAttributes } from "react"
import type {
  ComponentArgs,
  CSSUIObject,
  HTMLUIProps,
  HTMLUIPropsWithoutAs,
} from "../../core"
import type { Merge } from "../../utils"
import type { UseResizableTriggerProps } from "./use-resizable"
import { forwardRef } from "react"
import { PanelResizeHandle } from "react-resizable-panels"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useResizableContext, useResizableTrigger } from "./use-resizable"

interface ResizableTriggerOptions {
  /**
   * The resizable trigger icon to use.
   */
  icon?: ReactElement
  /**
   * Props for resizable trigger icon component.
   */
  iconProps?: HTMLUIProps
}

export interface ResizableTriggerProps
  extends Merge<
      Omit<UseResizableTriggerProps, "ref">,
      Omit<HTMLUIPropsWithoutAs, "id" | "onBlur" | "onFocus">
    >,
    ResizableTriggerOptions {}

export const ResizableTrigger = forwardRef<HTMLElement, ResizableTriggerProps>(
  ({ className, children, icon, iconProps, ...rest }, ref) => {
    const { styles } = useResizableContext()
    const { getIconProps, getTriggerProps } = useResizableTrigger({
      ref,
      ...rest,
    })

    const css: CSSUIObject = { position: "relative", ...styles.trigger }

    return (
      <ui.div
        as={PanelResizeHandle}
        className={cx("ui-resizable__trigger", className)}
        __css={css}
        {...getTriggerProps()}
      >
        {icon ? (
          <ui.div
            className="ui-resizable__trigger__icon"
            __css={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              left: "50%",
              position: "absolute",
              top: "50%",
              transform: "auto",
              translateX: "-50%",
              translateY: "-50%",
              ...styles.icon,
            }}
            {...getIconProps(iconProps)}
          >
            {icon}
          </ui.div>
        ) : null}

        {children}
      </ui.div>
    )
  },
) as {
  (props: RefAttributes<HTMLElement> & ResizableTriggerProps): ReactElement
} & ComponentArgs

ResizableTrigger.displayName = "ResizableTrigger"
ResizableTrigger.__ui__ = "ResizableTrigger"
