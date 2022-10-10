import { useMemo } from 'react'
import { ui, forwardRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { createContext, cx } from '../../utils'

type ButtonGroupOptions = {
  isAttached?: boolean
  isDisabled?: boolean
}

export type ButtonGroupProps = HTMLUIProps<'div'> & ThemeProps<'Button'> & ButtonGroupOptions

type ButtonGroupContext = ThemeProps<'Button'> & {
  isDisabled?: boolean
}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>({
  strict: false,
  name: 'ButtonGroupContext',
})

export { useButtonGroup }

export const ButtonGroup = forwardRef<ButtonGroupProps, 'div'>(
  ({ className, size, variant, isAttached, isDisabled, gap, columnGap, ...rest }, ref) => {
    const css = {
      display: 'inline-flex',
    }

    const context: ButtonGroupContext = useMemo(
      () => ({ size, variant, isDisabled }),
      [size, variant, isDisabled],
    )

    if (isAttached) {
      Object.assign(css, {
        '> *:first-of-type:not(:last-of-type)': { borderEndRadius: 0 },
        '> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },
        '> *:not(:first-of-type):last-of-type': { borderStartRadius: 0 },
      })
    } else {
      Object.assign(css, {
        '& > *:not(style) ~ *:not(style)': { marginStart: gap || columnGap },
      })
    }

    return (
      <ButtonGroupProvider value={context}>
        {/* @ts-ignore */}
        <ui.div
          ref={ref}
          role='group'
          className={cx('ui-button-group', className)}
          __css={css}
          {...rest}
        />
      </ButtonGroupProvider>
    )
  },
)
