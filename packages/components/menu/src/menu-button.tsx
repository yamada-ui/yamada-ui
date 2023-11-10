import { ui, forwardRef, HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { PopoverTrigger } from "@yamada-ui/popover"
import { ariaAttr, cx, dataAttr, funcAll, handlerAll } from "@yamada-ui/utils"
import { KeyboardEvent, useCallback } from "react"
import { useMenu } from "./menu"

export type MenuButtonProps = HTMLUIProps<"button">

export const MenuButton = forwardRef<MenuButtonProps, "button">(
  ({ className, children, as: As, ...rest }, ref) => {
    const { isOpen, onOpen, onFocusFirstItem, onFocusLastItem } = useMenu()

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, Function> = {
          Enter: funcAll(onOpen, onFocusFirstItem),
          ArrowDown: funcAll(onOpen, onFocusFirstItem),
          ArrowUp: funcAll(onOpen, onFocusLastItem),
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        ev.stopPropagation()
        action()
      },
      [onFocusFirstItem, onFocusLastItem, onOpen],
    )

    const Component = As || Button

    return (
      <PopoverTrigger>
        <Component
          ref={ref}
          className={cx("ui-menu", className)}
          {...rest}
          data-active={dataAttr(isOpen)}
          aria-expanded={ariaAttr(isOpen)}
          onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
        >
          <ui.span __css={{ pointerEvents: "none", flex: "1 1 auto", minW: 0 }}>
            {children}
          </ui.span>
        </Component>
      </PopoverTrigger>
    )
  },
)

const Button = forwardRef<MenuButtonProps, "button">((rest, ref) => {
  const { styles } = useMenu()

  const css: CSSUIObject = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    outline: 0,
    ...styles.button,
  }

  return <ui.button ref={ref} __css={css} {...rest} />
})
