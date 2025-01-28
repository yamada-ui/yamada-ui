import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useStepContext } from "./step"
import { useStepperContext } from "./use-stepper"

export interface StepSeparatorProps extends HTMLUIProps {}

export const StepSeparator = forwardRef<StepSeparatorProps, "div">(
  ({ className, ...rest }, ref) => {
    const { orientation, showLastSeparator, styles } = useStepperContext()
    const { isLast, status } = useStepContext()

    const css: CSSUIObject = { ...styles.separator }

    if (isLast && !showLastSeparator) return null

    return (
      <ui.div
        ref={ref}
        className={cx("ui-step__separator", className)}
        data-orientation={orientation}
        data-status={status}
        role="separator"
        __css={css}
        {...rest}
      />
    )
  },
)

StepSeparator.displayName = "StepSeparator"
StepSeparator.__ui__ = "StepSeparator"
