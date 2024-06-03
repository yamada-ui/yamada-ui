import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { FC, ReactElement } from "react"
import { PanelResizeHandle } from "react-resizable-panels"
import type { UseResizableTriggerProps } from "./use-resizable"
import { useResizableContext, useResizableTrigger } from "./use-resizable"

type ResizableTriggerOptions = {
  /**
   * The resizable trigger icon to use.
   */
  icon?: ReactElement
  /**
   * Props for resizable trigger icon component.
   */
  iconProps?: HTMLUIProps<"div">
}

export type ResizableTriggerProps = Omit<HTMLUIProps<"div">, "as"> &
  Omit<UseResizableTriggerProps, "ref"> &
  ResizableTriggerOptions

export const ResizableTrigger = forwardRef<ResizableTriggerProps, "div", false>(
  ({ className, icon, children, iconProps, ...rest }, ref) => {
    const { styles } = useResizableContext()
    const { getTriggerProps, getIconProps } = useResizableTrigger({
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
            className="ui-resizable__trigger-icon"
            __css={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "auto",
              translateY: "-50%",
              translateX: "-50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
)

export type ResizableTriggerIconProps = IconProps

export const ResizableTriggerIcon: FC<ResizableTriggerIconProps> = (rest) => {
  return (
    <Icon viewBox="0 0 23 39" w="0.5rem" h="1rem" {...rest}>
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
