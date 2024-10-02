import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { WithTransitionProps } from "@yamada-ui/motion"
import type { CollapseProps } from "@yamada-ui/transitions"
import { forwardRef, ui } from "@yamada-ui/core"
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
      "animationOpacity" | "endingHeight" | "startingHeight"
    > {}

export const AccordionPanel = forwardRef<AccordionPanelProps, "div">(
  (
    {
      className,
      animationOpacity,
      children,
      delay,
      duration,
      endingHeight,
      startingHeight,
      transition,
      transitionEnd,
      unmountOnExit,
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
          animationOpacity,
          delay,
          duration,
          endingHeight,
          isOpen,
          startingHeight,
          transition,
          transitionEnd,
          unmountOnExit,
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
