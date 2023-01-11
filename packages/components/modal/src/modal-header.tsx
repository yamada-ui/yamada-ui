import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useModal } from './'

export type ModalHeaderProps = HTMLUIProps<'header'>

export const ModalHeader = forwardRef<ModalHeaderProps, 'header'>(
  ({ className, __css, ...rest }, ref) => {
    const { styles } = useModal()

    const css: CSSUIObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      ...(__css ? __css : styles.header),
    }

    return (
      <ui.header ref={ref} className={cx('ui-modal-header', className)} __css={css} {...rest} />
    )
  },
)
