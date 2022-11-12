import { CloseButton, CloseButtonProps } from '@yamada-ui/forms'
import { forwardRef, CSSUIObject } from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useModal } from './'

export type ModalCloseButtonProps = CloseButtonProps

export const ModalCloseButton = forwardRef<ModalCloseButtonProps, 'button'>(
  ({ onClick, ...rest }, ref) => {
    const { styles, onClose } = useModal()

    const css: CSSUIObject = {
      position: 'absolute',
      ...styles.closeButton,
    }

    return (
      <CloseButton
        ref={ref}
        className={cx('ui-modal-close-button')}
        __css={css}
        onClick={(event) => {
          onClick?.(event)
          onClose?.()
        }}
        {...rest}
      />
    )
  },
)
