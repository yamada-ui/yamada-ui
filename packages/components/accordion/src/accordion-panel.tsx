import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { WithTransitionProps } from "@yamada-ui/motion"
import type { CollapseProps } from "@yamada-ui/transitions"
import { Collapse } from "@yamada-ui/transitions"
import { cx } from "@yamada-ui/utils"
import {
  useAccordionContext,
  useAccordionItemContext,
} from "./accordion-context"

export interface AccordionPanelProps
  extends Omit<WithTransitionProps<HTMLUIProps>, "isOpen">,
    Pick<
      CollapseProps,
      "animationOpacity" | "startingHeight" | "endingHeight"
    > {}

export const AccordionPanel = forwardRef<AccordionPanelProps, "div">(
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
    const { isOpen, getPanelProps } = useAccordionItemContext()
    const { styles } = useAccordionContext()

    const resolvedChildren =
      typeof children === "string" ? <p>{children}</p> : children

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
        <ui.div
          {...getPanelProps(rest, ref)}
          className={cx("ui-accordion__panel", className)}
          __css={css}
        >
          {resolvedChildren}
        </ui.div>
      </Collapse>
    )
  },
)

AccordionPanel.displayName = "AccordionPanel"
AccordionPanel.__ui__ = "AccordionPanel"
