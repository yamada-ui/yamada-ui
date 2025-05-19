import type { ReactNode } from "react"
import type { CSSUIObject, ThemeProps } from "../../core"
import type { StepProps } from "./step"
import type { StepDescriptionProps } from "./step-description"
import type { StepSeparatorProps } from "./step-separator"
import type { StepStatusProps } from "./step-status"
import type { StepTitleProps } from "./step-title"
import type { UseStepperProps } from "./use-stepper"
import { useMemo } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx } from "../../utils"
import { Step } from "./step"
import { StepDescription } from "./step-description"
import { StepSeparator } from "./step-separator"
import { StepStatus } from "./step-status"
import { StepTitle } from "./step-title"
import {
  StepperContext,
  StepperDescendantsContextProvider,
  useStepper,
} from "./use-stepper"

interface StepItem extends Omit<StepProps, "title"> {
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
  descriptionProps?: StepDescriptionProps
  /**
   * Props for step separator element.
   */
  separatorProps?: StepSeparatorProps
  /**
   * Props for step status element.
   */
  statusProps?: StepStatusProps
  /**
   * Props for step title element.
   */
  titleProps?: StepTitleProps
}

export type Steps = StepItem[]

interface StepperOptions {
  /**
   * If provided, generate step components based on steps.
   */
  steps?: Steps
}

export interface StepperProps
  extends ThemeProps<"Stepper">,
    UseStepperProps,
    StepperOptions {}

/**
 * `Stepper` is a component that displays the progress of a multi-step process.
 *
 * @see https://yamada-ui.com/components/navigation/stepper
 */
export const Stepper = forwardRef<StepperProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Stepper", props)
  const { className, children, steps, ...computedProps } =
    omitThemeProps(mergedProps)

  const { descendants, getContainerProps, ...rest } = useStepper(computedProps)

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
          <Step key={index} {...rest}>
            <StepStatus {...statusProps} />

            <ui.div flexShrink={0}>
              {title ? <StepTitle {...titleProps}>{title}</StepTitle> : null}
              {description ? (
                <StepDescription {...descriptionProps}>
                  {description}
                </StepDescription>
              ) : null}
            </ui.div>

            {hasSeparator ? <StepSeparator {...separatorProps} /> : null}
          </Step>
        ),
      )
    }
  }, [children, steps])

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <StepperDescendantsContextProvider value={descendants}>
      <StepperContext value={{ ...rest, styles }}>
        <ui.div
          className={cx("ui-stepper", className)}
          __css={css}
          {...getContainerProps({}, ref)}
        >
          {computedChildren}
        </ui.div>
      </StepperContext>
    </StepperDescendantsContextProvider>
  )
})

Stepper.displayName = "Stepper"
Stepper.__ui__ = "Stepper"
