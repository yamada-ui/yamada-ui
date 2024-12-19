import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useStepContext } from "./step"
import { useStepperContext } from "./use-stepper"

export interface StepTitleProps extends HTMLUIProps {}

export const StepTitle = forwardRef<StepTitleProps, "h3">(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const css: CSSUIObject = { ...styles.title }

    return (
      <ui.h3
        ref={ref}
        className={cx("ui-step__title", className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)

StepTitle.displayName = "StepTitle"
StepTitle.__ui__ = "StepTitle"
