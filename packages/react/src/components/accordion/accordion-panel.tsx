import type { FC, HTMLUIProps } from "../../core"
import type { WithTransitionProps } from "../motion"
import type { CollapseProps } from "../transitions"
import { ui } from "../../core"
import { cx } from "../../utils"
import { Collapse } from "../transitions"
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

export const AccordionPanel: FC<AccordionPanelProps> = ({
  ref,
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
}) => {
  const { open, getPanelProps } = useAccordionItemContext()
  const { styles } = useAccordionContext()

  const resolvedChildren =
    typeof children === "string" ? <p>{children}</p> : children

  return (
    <Collapse
      {...{
        animationOpacity,
        delay,
        duration,
        endingHeight,
        open,
        startingHeight,
        transition,
        transitionEnd,
        unmountOnExit,
      }}
    >
      <ui.div
        {...getPanelProps(rest, ref)}
        className={cx("ui-accordion__panel", className)}
        __css={styles.panel}
      >
        {resolvedChildren}
      </ui.div>
    </Collapse>
  )
}

AccordionPanel.__ui__ = "AccordionPanel"
