import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { MouseEvent } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverAnchor, PopoverTrigger } from "@yamada-ui/popover"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useState } from "react"
import { useContextMenu } from "./menu-context"

interface Position {
  left: number
  top: number
}

export interface ContextMenuTriggerProps extends HTMLUIProps {}

export const ContextMenuTrigger = forwardRef<ContextMenuTriggerProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useContextMenu() ?? {}
    const [position, setPosition] = useState<Position>({ left: 0, top: 0 })

    const css: CSSUIObject = { ...styles?.container }

    const onContextMenu = (ev: MouseEvent) => {
      setPosition({ left: ev.pageX, top: ev.pageY })
    }

    return (
      <>
        <PopoverAnchor>
          <ui.div
            className="ui-context-menu__anchor"
            style={{ position: "absolute", ...position }}
          />
        </PopoverAnchor>

        <PopoverTrigger>
          <ui.div
            ref={ref}
            className={cx("ui-context-menu", className)}
            __css={css}
            {...rest}
            onContextMenu={handlerAll(rest.onContextMenu, onContextMenu)}
          >
            {children}
          </ui.div>
        </PopoverTrigger>
      </>
    )
  },
)
