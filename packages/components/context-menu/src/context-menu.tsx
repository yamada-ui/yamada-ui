import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Menu, MenuList, MenuItem, PopoverTrigger } from "@yamada-ui/react"
import type { MenuListProps } from "@yamada-ui/react"
import { createContext, cx } from "@yamada-ui/utils"

type ContextMenuContext = {
  styles: Record<string, CSSUIObject>
}

const [ContextMenuProvider, useContextMenu] = createContext<ContextMenuContext>(
  {
    name: "ContextMenuContext",
    errorMessage: `useContextMenu returned is 'undefined'. Seems you forgot to wrap the components in "<ContextMenu />"`,
  },
)

export { useContextMenu }

type ContextMenuOptions = {}

export type ContextMenuProps = HTMLUIProps<"div"> &
  ThemeProps<"ContextMenu"> &
  ContextMenuOptions

export const ContextMenu = forwardRef<ContextMenuProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("ContextMenu", props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {}

  return (
    <ContextMenuProvider
      value={{
        styles,
      }}
    >
      <Menu trigger="contextmenu">
        <ui.div
          ref={ref}
          className={cx("ui-context-menu", className)}
          __css={css}
          {...rest}
          styles={styles}
        >
          {children}
        </ui.div>
      </Menu>
    </ContextMenuProvider>
  )
})

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

type ContextMenuContentProps = MenuListProps
export const ContextMenuContent = forwardRef<ContextMenuContentProps, "ul">(
  ({ ...rest }, ref) => {
    return <MenuList ref={ref} {...rest} />
  },
)

type ContextMenuDividerProps = HTMLUIProps<"hr">
export const ContextMenuDivider = forwardRef<ContextMenuDividerProps, "hr">(
  ({ className, ...rest }, ref) => {
    const { styles } = useContextMenu()

    const css: CSSUIObject = { ...styles.divider }

    return (
      <ui.hr
        __css={css}
        ref={ref}
        className={cx("ui-menu__divider", className)}
        {...rest}
      />
    )
  },
)

type ContextMenuItemProps = HTMLUIProps<"button"> & {
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
}
export const ContextMenuItem = forwardRef<ContextMenuItemProps, "button">(
  ({ ...rest }, ref) => {
    return <MenuItem ref={ref} {...rest} />
  },
)

type MenuButtonProps = HTMLUIProps<"button">
const Button = forwardRef<MenuButtonProps, "button">((rest, ref) => {
  const css: CSSUIObject = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    outline: 0,
  }

  return <ui.button ref={ref} __css={css} {...rest} />
})
