import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { IconProps } from "../icon"
import type { StepperStyle } from "./stepper.style"
import type { StepperStepContextValue, UseStepperProps } from "./use-stepper"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { runIfFn } from "../../utils"
import { CheckIcon, Icon } from "../icon"
import { stepperStyle } from "./stepper.style"
import {
  StepperContext,
  StepperDescendantsContext,
  StepperStepContext,
  useStepper,
  useStepperContext,
  useStepperStep,
  useStepperStepContext,
} from "./use-stepper"

interface StepperStepItem extends Omit<StepperStepProps, "title"> {
  /**
   * The description for step component.
   */
  description?: ReactNode
  /**
   * If true, display the step separator.
   *
   * @default true
   */
  hasSeparator?: boolean
  /**
   * The title for step component.
   */
  title?: ReactNode
  /**
   * Props for step description element.
   */
  descriptionProps?: StepperStepDescriptionProps
  /**
   * Props for step separator element.
   */
  separatorProps?: StepperStepSeparatorProps
  /**
   * Props for step status element.
   */
  statusProps?: StepperStepStatusProps
  /**
   * Props for step title element.
   */
  titleProps?: StepperStepTitleProps
}

export type StepperSteps = StepperStepItem[]

export interface StepperRootProps
  extends ThemeProps<StepperStyle>,
    UseStepperProps {
  /**
   * If provided, generate step components based on steps.
   */
  steps?: StepperSteps
}

export const {
  PropsContext: StepperPropsContext,
  usePropsContext: useStepperPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StepperRootProps, StepperStyle>("stepper", stepperStyle)

/**
 * `Stepper` is a component that displays the progress of a multi-step process.
 *
 * @see https://yamada-ui.com/components/stepper
 */
export const StepperRoot = withProvider<"div", StepperRootProps>(
  ({ children, steps, ...rest }) => {
    const {
      descendants,
      getStepStatus,
      index,
      orientation,
      showLastSeparator,
      getRootProps,
    } = useStepper(rest)

    const computedChildren = useMemo(() => {
      const hasChildren = children != null

      if (hasChildren) {
        return children
      } else {
        return steps?.map(
          (
            {
              description,
              hasSeparator = true,
              title,
              descriptionProps,
              separatorProps,
              statusProps,
              titleProps,
              ...rest
            },
            index,
          ) => (
            <StepperStep key={index} {...rest}>
              <StepperStepStatus {...statusProps} />

              <styled.div flexShrink={0}>
                {title ? (
                  <StepperStepTitle {...titleProps}>{title}</StepperStepTitle>
                ) : null}
                {description ? (
                  <StepperStepDescription {...descriptionProps}>
                    {description}
                  </StepperStepDescription>
                ) : null}
              </styled.div>

              {hasSeparator ? (
                <StepperStepSeparator {...separatorProps} />
              ) : null}
            </StepperStep>
          ),
        )
      }
    }, [children, steps])

    const context = useMemo(
      () => ({
        getStepStatus,
        index,
        orientation,
        showLastSeparator,
      }),
      [getStepStatus, index, orientation, showLastSeparator],
    )

    return (
      <StepperDescendantsContext value={descendants}>
        <StepperContext value={context}>
          <styled.div {...getRootProps()}>{computedChildren}</styled.div>
        </StepperContext>
      </StepperDescendantsContext>
    )
  },
  "root",
)()

export interface StepperStepProps extends HTMLStyledProps {}

export const StepperStep = withContext<"div", StepperStepProps>((props) => {
  const { index, isFirst, isLast, status, getStepProps } = useStepperStep()
  const context = useMemo(
    () => ({ index, isFirst, isLast, status }),
    [index, isFirst, isLast, status],
  )

  return (
    <StepperStepContext value={context}>
      <styled.div {...getStepProps(props)} />
    </StepperStepContext>
  )
}, "step")()

export type StepperStepStatusProps = {
  [key in "active" | "complete" | "incomplete"]?:
    | ((props: Omit<StepperStepContextValue, "status">) => ReactNode)
    | ReactNode
}

export const StepperStepStatus = withContext<"div", StepperStepStatusProps>(
  ({
    active = <StepperStepNumber />,
    complete = <StepperStepIcon />,
    incomplete = <StepperStepNumber />,
    ...rest
  }) => {
    const { status, ...props } = useStepperStepContext()

    let component: null | ReactNode = null

    switch (status) {
      case "complete":
        component = runIfFn(complete, props)

        break
      case "incomplete":
        component = runIfFn(incomplete, props)

        break
      case "active":
        component = runIfFn(active, props)

        break
    }

    return (
      <styled.div data-status={status} {...rest}>
        {component ? component : null}
      </styled.div>
    )
  },
  "status",
)()

export interface StepperStepNumberProps extends HTMLStyledProps {}

export const StepperStepNumber = withContext<"div", StepperStepNumberProps>(
  ({ children, ...rest }) => {
    const { index, status } = useStepperStepContext()

    return (
      <styled.div data-status={status} {...rest}>
        {children || index + 1}
      </styled.div>
    )
  },
  "number",
)()

export interface StepperStepIconProps extends IconProps {}

export const StepperStepIcon = withContext<"svg", StepperStepIconProps>(
  (props) => {
    const { status } = useStepperStepContext()

    const as = status === "complete" ? CheckIcon : undefined

    return <Icon as={as} data-status={status} {...props} />
  },
  "icon",
)()

export interface StepperStepDescriptionProps extends HTMLStyledProps {}

export const StepperStepDescription = withContext<
  "p",
  StepperStepDescriptionProps
>((props) => {
  const { status } = useStepperStepContext()

  return <styled.p data-status={status} {...props} />
}, "description")()

export interface StepperStepSeparatorProps extends HTMLStyledProps {}

export const StepperStepSeparator = withContext<
  "div",
  StepperStepSeparatorProps
>((props) => {
  const { orientation, showLastSeparator } = useStepperContext()
  const { isLast, status } = useStepperStepContext()

  if (isLast && !showLastSeparator) return null

  return (
    <styled.div
      data-orientation={orientation}
      data-status={status}
      role="separator"
      {...props}
    />
  )
}, "separator")()

export interface StepperStepTitleProps extends HTMLStyledProps {}

export const StepperStepTitle = withContext<"h3", StepperStepTitleProps>(
  (props) => {
    const { status } = useStepperStepContext()

    return <styled.h3 data-status={status} {...props} />
  },
  "title",
)()
