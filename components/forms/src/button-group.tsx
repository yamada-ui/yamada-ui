import { ui, forwardRef, CSSUIProps, HTMLUIProps, ThemeProps } from '@yamada-ui/system'
import { createContext, cx } from '@yamada-ui/utils'
import { useMemo } from 'react'

type ButtonGroupOptions = {
  direction?: CSSUIProps['flexDirection']
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
  (
    {
      className,
      size,
      variant,
      direction: flexDirection,
      isAttached,
      isDisabled,
      gap,
      columnGap,
      rowGap,
      ...rest
    },
    ref,
  ) => {
    const isColumn = flexDirection === 'column' || flexDirection === 'column-reverse'

    const css = {
      display: 'inline-flex',
      flexDirection,
    }

    const context: ButtonGroupContext = useMemo(
      () => ({ size, variant, isDisabled }),
      [size, variant, isDisabled],
    )

    if (isAttached) {
      Object.assign(css, {
        '> *:first-of-type:not(:last-of-type)': isColumn
          ? { borderBottomRadius: 0, marginBlockEnd: '-1px' }
          : { borderRightRadius: 0, marginInlineEnd: '-1px' },
        '> *:not(:first-of-type):not(:last-of-type)': isColumn
          ? { borderRadius: 0, marginBlockStart: '-1px' }
          : { borderRadius: 0, marginInlineEnd: '-1px' },
        '> *:not(:first-of-type):last-of-type': isColumn
          ? { borderTopRadius: 0, marginBlockStart: '-1px' }
          : { borderLeftRadius: 0 },
      })
    } else {
      Object.assign(css, {
        gap,
        columnGap,
        rowGap,
      })
    }

    return (
      <ButtonGroupProvider value={context}>
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
