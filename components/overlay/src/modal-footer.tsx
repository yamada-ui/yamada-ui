import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useModal } from './'

export type ModalFooterProps = HTMLUIProps<'footer'>

export const ModalFooter = forwardRef<ModalFooterProps, 'footer'>(({ className, ...rest }, ref) => {
  const { styles } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...styles.footer,
  }

  return <ui.footer ref={ref} className={cx('ui-modal-footer', className)} __css={css} {...rest} />
})
