import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
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
        role="separator"
        data-orientation={orientation}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)
