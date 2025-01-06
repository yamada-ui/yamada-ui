import type { ReactElement, RefAttributes } from "react"
import type {
  ComponentArgs,
  FC,
  HTMLUIProps,
  HTMLUIPropsWithoutAs,
} from "../../core"
import type { Merge } from "../../utils"
import type { IconProps } from "../icon"
import type { UseResizableTriggerProps } from "./use-resizable"
import { forwardRef } from "react"
import { PanelResizeHandle } from "react-resizable-panels"
import { ui } from "../../core"
import { cx } from "../../utils"
import { Icon } from "../icon"
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

    return (
      <ui.div
        as={PanelResizeHandle}
        className={cx("ui-resizable__trigger", className)}
        __css={styles.trigger}
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

export type ResizableTriggerIconProps = IconProps

export const ResizableTriggerIcon: FC<ResizableTriggerIconProps> = (rest) => {
  return (
    <Icon h="1rem" viewBox="0 0 23 39" w="0.5rem" {...rest}>
      <path
        d="M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z"
        fill="currentColor"
      />

      <path
        d="M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z"
        fill="currentColor"
      />

      <path
        d="M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z"
        fill="currentColor"
      />

      <path
        d="M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z"
        fill="currentColor"
      />

      <path
        d="M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z"
        fill="currentColor"
      />

      <path
        d="M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z"
        fill="currentColor"
      />
    </Icon>
  )
}

ResizableTriggerIcon.__ui__ = "ResizableTriggerIcon"
