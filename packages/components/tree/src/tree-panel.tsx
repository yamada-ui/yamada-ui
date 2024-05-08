import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { WithTransitionProps } from "@yamada-ui/motion"
import type { CollapseProps } from "@yamada-ui/transitions"
import { Collapse } from "@yamada-ui/transitions"
import { cx } from "@yamada-ui/utils"
import { useTreeContext } from "./tree"
import { useTreeItemContext } from "./tree-item"

export type TreePanelProps = Omit<
  WithTransitionProps<HTMLUIProps<"div">>,
  "isOpen"
> &
  Pick<CollapseProps, "animationOpacity" | "startingHeight" | "endingHeight">

export const TreePanel = forwardRef<TreePanelProps, "div">(
  (
    {
      className,
      unmountOnExit,
      animationOpacity,
      startingHeight,
      endingHeight,
      transition,
      transitionEnd,
      delay,
      duration,
      children,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, getPanelProps } = useTreeItemContext()
    const { styles } = useTreeContext()

    const resolvedChildren =
      typeof children === "string" ? <ui.li>{children}</ui.li> : children

    const css: CSSUIObject = { ...styles.panel }

    return (
      <Collapse
        {...{
          isOpen,
          unmountOnExit,
          animationOpacity,
          startingHeight,
          endingHeight,
          transition,
          transitionEnd,
          delay,
          duration,
        }}
      >
        <ui.ul
          {...getPanelProps(rest, ref)}
          className={cx("ui-tree__panel", className)}
          __css={css}
        >
          {resolvedChildren}
        </ui.ul>
      </Collapse>
    )
  },
)
