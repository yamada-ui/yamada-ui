import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useStepContext } from "./step"
import { useStepperContext } from "./use-stepper"

export interface StepDescriptionProps extends HTMLUIProps {}

export const StepDescription = forwardRef<StepDescriptionProps, "p">(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const css: CSSUIObject = { ...styles.description }

    return (
      <ui.p
        ref={ref}
        className={cx("ui-step__description", className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)

StepDescription.displayName = "StepDescription"
StepDescription.__ui__ = "StepDescription"
