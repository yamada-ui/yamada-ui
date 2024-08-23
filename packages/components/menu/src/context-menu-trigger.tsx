import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { PopoverAnchor, PopoverTrigger } from "@yamada-ui/popover"
import { cx, handlerAll } from "@yamada-ui/utils"
import type { MouseEvent } from "react"
import { useState } from "react"
import { useContextMenu } from "./context-menu"

type Position = { top: number; left: number }

export type ContextMenuTriggerProps = HTMLUIProps<"div">

export const ContextMenuTrigger = forwardRef<ContextMenuTriggerProps, "div">(
  ({ children, className, ...rest }, ref) => {
    const { styles } = useContextMenu()
    const [position, setPosition] = useState<Position>({ top: 0, left: 0 })

    const css: CSSUIObject = { ...styles.container }

    const onContextMenu = (ev: MouseEvent) => {
      setPosition({ top: ev.clientY, left: ev.clientX })
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
