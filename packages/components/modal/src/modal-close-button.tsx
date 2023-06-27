import { CloseButton, CloseButtonProps } from '@yamada-ui/close-button'
import { forwardRef, CSSUIObject } from '@yamada-ui/core'
import { cx, handlerAll } from '@yamada-ui/utils'
import { useModal } from './modal'

export type ModalCloseButtonProps = CloseButtonProps

export const ModalCloseButton = forwardRef<ModalCloseButtonProps, 'button'>(
  ({ onClick, __css, ...rest }, ref) => {
    const { styles, onClose } = useModal()

    const css: CSSUIObject = {
      position: 'absolute',
      ...(__css ? __css : styles.closeButton),
    }

    return (
      <CloseButton
        ref={ref}
        className={cx('ui-modal-close-button')}
        __css={css}
        onClick={handlerAll(onClick, (event) => {
          event.stopPropagation()
          onClose?.()
        })}
        {...rest}
      />
    )
  },
)
