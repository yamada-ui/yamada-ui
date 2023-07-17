import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useStepContext } from './step'
import { useStepperContext } from './use-stepper'

export type StepTitleProps = HTMLUIProps<'h3'>

export const StepTitle = forwardRef<StepTitleProps, 'h3'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const css: CSSUIObject = { ...styles.title }

    return (
      <ui.h3
        ref={ref}
        className={cx('ui-step-title', className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)
