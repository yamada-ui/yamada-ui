import type { ReactNode } from "react"
import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { IconProps } from "../icon"
import type { StepContext } from "./step"
import { forwardRef, ui } from "../../core"
import { cx, runIfFunc } from "../../utils"
import { CheckIcon, Icon } from "../icon"
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
      complete = <StepIcon />,
      incomplete = <StepNumber />,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useStepperContext()
    const { status, ...props } = useStepContext()

    const css: CSSUIObject = { ...styles.status }

    let component: null | ReactNode = null

    switch (status) {
      case "complete":
        component = runIfFunc(complete, props)

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

export interface StepIconProps extends IconProps {}

export const StepIcon = forwardRef<StepIconProps, "svg">(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const as = status === "complete" ? CheckIcon : undefined

    const css: CSSUIObject = { ...styles.icon }

    return (
      <Icon
        ref={ref}
        as={as}
        className={cx("ui-step__icon", className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)

StepIcon.displayName = "StepIcon"
StepIcon.__ui__ = "StepIcon"
