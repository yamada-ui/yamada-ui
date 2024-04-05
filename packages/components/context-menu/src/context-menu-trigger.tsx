import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { PopoverAnchor, PopoverTrigger } from "@yamada-ui/react"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"

type ContextMenuTriggerProps = HTMLUIProps<"div">
export const ContextMenuTrigger = forwardRef<ContextMenuTriggerProps, "div">(
  ({ children, className, as: As, ...rest }, ref) => {
    const Component = As ?? Button
    const [point, setPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

    const handleContextMenu = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY })
    }

    return (
      <div>
        <PopoverAnchor>
          <div style={{ position: "fixed", top: point.y, left: point.x }}></div>
        </PopoverAnchor>
        <PopoverTrigger>
          <Component
            ref={ref}
            className={cx("ui-menu", className)}
            onContextMenu={handleContextMenu}
            {...rest}
          >
            <ui.span
              __css={{ pointerEvents: "none", flex: "1 1 auto", minW: 0 }}
            >
              {children}
            </ui.span>
          </Component>
        </PopoverTrigger>
      </div>
    )
  },
)

type ContextMenuButtonProps = HTMLUIProps<"button">
const Button = forwardRef<ContextMenuButtonProps, "button">((rest, ref) => {
  const css: CSSUIObject = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    outline: 0,
  }

  return <ui.button ref={ref} __css={css} {...rest} />
})
