import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx, createContext, dataAttr } from '@yamada-ui/utils'
import { useStep, useStepperContext, UseStepReturn } from './use-stepper'

export type StepContext = Omit<UseStepReturn, 'getStepProps'>

export const [StepProvider, useStepContext] = createContext<StepContext>({
  name: 'StepperContext',
  errorMessage: `useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`,
})

export type StepProps = HTMLUIProps<'div'>

export const Step = forwardRef<StepProps, 'div'>(({ className, ...rest }, ref) => {
  const { orientation, showLastSeparator, styles } = useStepperContext()
  const { index, status, isFirst, isLast, getStepProps } = useStep()

  const css: CSSUIObject = { ...styles.step }

  return (
    <StepProvider value={{ index, status, isFirst, isLast }}>
      <ui.div
        className={cx('ui-step', className)}
        __css={css}
        data-orientation={orientation}
        data-stretch={dataAttr(showLastSeparator)}
        {...getStepProps(rest, ref)}
      />
    </StepProvider>
  )
})
