import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useStepContext } from './step'
import { useStepperContext } from './use-stepper'

export type StepDescriptionProps = HTMLUIProps<'p'>

export const StepDescription = forwardRef<StepDescriptionProps, 'p'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const css: CSSUIObject = { ...styles.description }

    return (
      <ui.p
        ref={ref}
        className={cx('ui-step-description', className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)
