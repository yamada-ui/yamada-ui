import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { Icon, IconProps } from '@yamada-ui/icon'
import { cx, runIfFunc } from '@yamada-ui/utils'
import { ComponentProps, ReactNode } from 'react'
import { StepContext, useStepContext } from './step'
import { useStepperContext } from './use-stepper'

export type StepStatusProps = {
  [key in 'complete' | 'active' | 'incomplete']?:
    | ReactNode
    | ((props: Omit<StepContext, 'status'>) => ReactNode)
}

export const StepStatus = forwardRef<StepStatusProps, 'div'>(
  (
    {
      className,
      complete = <StepIcon />,
      incomplete = <StepNumber />,
      active = <StepNumber />,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useStepperContext()
    const { status, ...props } = useStepContext()

    const css: CSSUIObject = { ...styles.status }

    let component: ReactNode | null = null

    switch (status) {
      case 'complete':
        component = runIfFunc(complete, props)

        break
      case 'incomplete':
        component = runIfFunc(incomplete, props)

        break
      case 'active':
        component = runIfFunc(active, props)

        break
    }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-step-status', className)}
        data-status={status}
        __css={css}
        {...rest}
      >
        {component ? <>{component}</> : null}
      </ui.div>
    )
  },
)

export type StepNumberProps = HTMLUIProps<'div'>

export const StepNumber = forwardRef<StepNumberProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status, index } = useStepContext()

    const css: CSSUIObject = { ...styles.number }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-step-number', className)}
        data-status={status}
        __css={css}
        {...rest}
      >
        {children || index + 1}
      </ui.div>
    )
  },
)

export type StepIconProps = IconProps

export const StepIcon = forwardRef<StepIconProps, 'svg'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useStepperContext()
    const { status } = useStepContext()

    const as = status === 'complete' ? CheckIcon : undefined

    const css: CSSUIObject = { ...styles.icon }

    return (
      <Icon
        ref={ref}
        as={as}
        className={cx('ui-step-icon', className)}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)

const CheckIcon = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 20 20'
      aria-hidden='true'
      height='1em'
      width='1em'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
        clipRule='evenodd'
      />
    </svg>
  )
}
