import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import type { StepContext } from "./step"
import { forwardRef, ui } from "@yamada-ui/core"
import { CheckIcon } from "@yamada-ui/lucide"
import { cx, runIfFunc } from "@yamada-ui/utils"
import { useStepContext } from "./step"
import { useStepperContext } from "./use-stepper"

export type StepStatusProps = {
  [key in "active" | "complete" | "incomplete"]?:
    | ((props: Omit<StepContext, "status">) => ReactNode)
    | ReactNode
}

export const StepStatus = forwardRef<StepStatusProps, "div">(
  (
    {
      className,
      active = <StepNumber />,
      complete,
      incomplete = <StepNumber />,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useStepperContext()
    const { status, ...props } = useStepContext()

    const css: CSSUIObject = { ...styles.status }
    const iconCss: CSSUIObject = { ...styles.icon }

    let component: null | ReactNode = null

    switch (status) {
      case "complete":
        component = runIfFunc(
          !complete ? (
            <ui.div className="ui-step__icon" __css={iconCss}>
              <CheckIcon />
            </ui.div>
          ) : (
            complete
          ),
          props,
        )

        break
      case "incomplete":
        component = runIfFunc(incomplete, props)

        break
      case "active":
        component = runIfFunc(active, props)

        break
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-step__status", className)}
        data-status={status}
        __css={css}
        {...rest}
      >
        {component ? component : null}
      </ui.div>
    )
  },
)

StepStatus.displayName = "StepStatus"
StepStatus.__ui__ = "StepStatus"

export interface StepNumberProps extends HTMLUIProps {}

export const StepNumber = forwardRef<StepNumberProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { index, status } = useStepContext()

    const css: CSSUIObject = { ...styles.number }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-step__number", className)}
        data-status={status}
        __css={css}
        {...rest}
      >
        {children || index + 1}
      </ui.div>
    )
  },
)

StepNumber.displayName = "StepNumber"
StepNumber.__ui__ = "StepNumber"
