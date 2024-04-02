import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { PopoverTrigger } from "@yamada-ui/react"
import { cx } from "@yamada-ui/utils"

type ContextMenuTriggerProps = HTMLUIProps<"div">
export const ContextMenuTrigger = forwardRef<ContextMenuTriggerProps, "div">(
  ({ children, className, as: As, ...rest }, ref) => {
    const Component = As ?? Button
    return (
      <PopoverTrigger>
        <Component ref={ref} className={cx("ui-menu", className)} {...rest}>
          <ui.span __css={{ pointerEvents: "none", flex: "1 1 auto", minW: 0 }}>
            {children}
          </ui.span>
        </Component>
      </PopoverTrigger>
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
