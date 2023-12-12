import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { useMemo } from "react"
import type { UseStepperProps } from "./use-stepper"
import {
  StepperProvider,
  useStepper,
  StepperDescendantsContextProvider,
} from "./use-stepper"
import type {
  StepProps,
  StepStatusProps,
  StepTitleProps,
  StepDescriptionProps,
  StepSeparatorProps,
} from "./"
import { Step, StepTitle, StepDescription, StepSeparator, StepStatus } from "./"

export type Steps = ({
  /**
   * The title for step component.
   */
  title?: ReactNode
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
   * Props for step status element.
   */
  statusProps?: StepStatusProps
  /**
   * Props for step title element.
   */
  titleProps?: StepTitleProps
  /**
   * Props for step description element.
   */
  descriptionProps?: StepDescriptionProps
  /**
   * Props for step separator element.
   */
  separatorProps?: StepSeparatorProps
} & StepProps)[]

type StepperOptions = {
  /**
   * If provided, generate step components based on steps.
   */
  steps?: Steps
}

export type StepperProps = ThemeProps<"Stepper"> &
  UseStepperProps &
  StepperOptions

/**
 * `Stepper` is a component that displays the progress of a multi-step process.
 *
 * @see Docs https://yamada-ui.com/components/navigation/stepper
 */
export const Stepper = forwardRef<StepperProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Stepper", props)
  const { className, steps, children, ...computedProps } =
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
            title,
            description,
            hasSeparator = true,
            statusProps,
            titleProps,
            descriptionProps,
            separatorProps,
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
      <StepperProvider value={{ ...rest, styles }}>
        <ui.div
          className={cx("ui-stepper", className)}
          __css={css}
          {...getContainerProps({}, ref)}
        >
          {computedChildren}
        </ui.div>
      </StepperProvider>
    </StepperDescendantsContextProvider>
  )
})
