import { ui, forwardRef, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useInputGroup } from './input-group'

type InputAddonOptions = {
  /**
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: 'left' | 'right'
}

export type InputAddonProps = HTMLUIProps<'div'> & InputAddonOptions

const InputAddon = forwardRef<InputAddonProps, 'div'>(
  ({ className, placement = 'left', ...rest }, ref) => {
    const styles = useInputGroup()

    const placementStyles = {
      left: {
        me: '-1px',
        roundedRight: 0,
        borderEndColor: 'transparent',
      },
      right: {
        ms: '-1px',
        roundedLeft: 0,
        borderStartColor: 'transparent',
      },
    }

    const css: CSSUIObject = {
      flex: '0 0 auto',
      w: 'auto',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      ...styles.addon,
      ...placementStyles[placement],
    }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-input-addon', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export const InputLeftAddon = forwardRef<InputAddonProps, 'div'>(
  ({ className, ...rest }, ref) => {
    return (
      <InputAddon
        ref={ref}
        className={cx('ui-input-addon-left', className)}
        placement='left'
        {...rest}
      />
    )
  },
)

export const InputRightAddon = forwardRef<InputAddonProps, 'div'>(
  ({ className, ...rest }, ref) => {
    return (
      <InputAddon
        ref={ref}
        className={cx('ui-input-addon-right', className)}
        placement='right'
        {...rest}
      />
    )
  },
)
