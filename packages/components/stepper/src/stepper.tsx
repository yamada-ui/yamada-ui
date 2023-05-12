import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { StepperProvider } from './use-stepper'

type StepperOptions = {}

export type StepperProps = HTMLUIProps<'div'> & ThemeProps<'Stepper'> & StepperOptions

export const Stepper = forwardRef<StepperProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Stepper', props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = { ...styles.stepper }

  return (
    <StepperProvider value={styles}>
      <ui.div ref={ref} className={cx('ui-stepper', className)} __css={css} {...rest}></ui.div>
    </StepperProvider>
  )
})
