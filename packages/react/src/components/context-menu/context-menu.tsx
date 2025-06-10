// import type { FC, ThemeProps } from "../../core"
// import type { MenuRootProps } from "../menu/menu"
// import { omitThemeProps, useComponentMultiStyle } from "../../core"
// import { MenuRoot } from "../menu/menu"
// import { ContextMenuProvider } from "../menu/menu-context"

// export interface ContextMenuProps
//   extends Omit<MenuRootProps, "trigger">,
//     ThemeProps<"ContextMenu"> {}

// /**
//  * `ContextMenu` is triggered by a right click and displays a menu at the pointer's position.
//  *
//  * @see https://yamada-ui.com/components/overlay/context-menu
//  */
// export const ContextMenu: FC<ContextMenuProps> = (props) => {
//   const [styles, mergedProps] = useComponentMultiStyle("ContextMenu", props)
//   const { ...rest } = omitThemeProps(mergedProps)

//   return (
//     <ContextMenuProvider value={{ styles }}>
//       <MenuRoot trigger="contextmenu" {...rest} />
//     </ContextMenuProvider>
//   )
// }

// ContextMenu.__ui__ = "ContextMenu"
