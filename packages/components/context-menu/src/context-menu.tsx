import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Menu, MenuList, MenuItem } from "@yamada-ui/react"
import type { MenuListProps } from "@yamada-ui/react"
import { createContext, cx } from "@yamada-ui/utils"
import { useState, useCallback } from "react"

type ContextMenuContext = {
  onOpen: (open: boolean) => void
}

const [ContextMenuProvider, useContextMenu] = createContext<ContextMenuContext>(
  {
    strict: false,
    name: "ContextMenuContext",
  },
)

type ContextMenuOptions = {}

export type ContextMenuProps = HTMLUIProps<"div"> &
  ThemeProps<"ContextMenu"> &
  ContextMenuOptions

export const ContextMenu = forwardRef<ContextMenuProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ContextMenu", props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)
  const [open, setOpen] = useState(false)

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setOpen(open)
    },
    [setOpen],
  )

  const css: CSSUIObject = {}

  return (
    <ContextMenuProvider
      value={{
        ...styles,
        onOpen: handleOpenChange,
      }}
    >
      <Menu isOpen={open}>
        <ui.div
          ref={ref}
          className={cx("ui-context-menu", className)}
          __css={css}
          {...rest}
        >
          {children}
        </ui.div>
      </Menu>
    </ContextMenuProvider>
  )
})

type ContextMenuTriggerProps = HTMLUIProps<"div">
export const ContextMenuTrigger = forwardRef<ContextMenuTriggerProps, "div">(
  ({ ...rest }, ref) => {
    const context = useContextMenu()

    return (
      <ui.div
        ref={ref}
        onContextMenu={(event) => {
          context.onOpen(true)
          event.preventDefault()
        }}
        {...rest}
      />
    )
  },
)

type ContextMenuContentProps = MenuListProps
export const ContextMenuContent = forwardRef<ContextMenuContentProps, "ul">(
  ({ ...rest }, ref) => {
    return <MenuList ref={ref} {...rest} />
  },
)

type ContextMenuItemProps = HTMLUIProps<"button">
export const ContextMenuItem = forwardRef<ContextMenuItemProps, "button">(
  ({ ...rest }, ref) => {
    return <MenuItem ref={ref} {...rest} />
  },
)
