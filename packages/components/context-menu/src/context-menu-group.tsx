import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { MenuGroup } from "@yamada-ui/react"
import { useContextMenu } from "./context-menu"

export type ContextMenuGroupProps = HTMLUIProps<"div"> & {
  /**
   * The label of the group.
   */
  label?: string
}

export const ContextMenuGroup = forwardRef<ContextMenuGroupProps, "div">(
  ({ ...rest }, ref) => {
    const { styles } = useContextMenu()

    const css: CSSUIObject = { ...styles.group }

    return <MenuGroup {...rest} ref={ref} __css={css} />
  },
)
