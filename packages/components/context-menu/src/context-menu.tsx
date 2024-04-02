import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Menu } from "@yamada-ui/react"
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
