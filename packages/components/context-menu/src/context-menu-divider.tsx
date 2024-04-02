import { ui, forwardRef } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useContextMenu } from "./context-menu"

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
