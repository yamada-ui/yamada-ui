import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { usePopover } from './'

export type PopoverFooterProps = HTMLUIProps<'footer'>

export const PopoverFooter = forwardRef<PopoverFooterProps, 'footer'>(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      ...styles.footer,
    }

    return (
      <ui.footer ref={ref} className={cx('ui-popover-footer', className)} __css={css} {...rest} />
    )
  },
)
