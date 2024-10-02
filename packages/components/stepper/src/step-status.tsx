import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { ComponentProps, ReactNode } from "react"
import type { StepContext } from "./step"
import { forwardRef, ui } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
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
        {component ? <>{component}</> : null}
      </ui.div>
    )
  },
)

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

const CheckIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      width="1em"
      aria-hidden="true"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}
