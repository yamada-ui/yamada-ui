import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { usePopover } from './'

export type PopoverBodyProps = HTMLUIProps<'main'>

export const PopoverBody = forwardRef<PopoverBodyProps, 'main'>(({ className, ...rest }, ref) => {
  const { styles } = usePopover()

  const css: CSSUIObject = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    ...styles.body,
  }

  return <ui.main ref={ref} className={cx('ui-popover-body', className)} __css={css} {...rest} />
})
