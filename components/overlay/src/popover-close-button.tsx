import { CloseButton, CloseButtonProps } from '@yamada-ui/components'
import { forwardRef, CSSUIObject } from '@yamada-ui/core'
import { cx, handlerAll } from '@yamada-ui/utils'
import { usePopover } from './'

export type PopoverCloseButtonProps = CloseButtonProps

export const PopoverCloseButton = forwardRef<PopoverCloseButtonProps, 'button'>(
  ({ onClick, ...rest }, ref) => {
    const { styles, onClose } = usePopover()

    const css: CSSUIObject = {
      position: 'absolute',
      ...styles.closeButton,
    }

    return (
      <CloseButton
        ref={ref}
        className={cx('ui-popover-close-button')}
        __css={css}
        onClick={handlerAll(onClick, (event) => {
          event.stopPropagation()
          onClose?.()
        })}
        size='sm'
        {...rest}
      />
    )
  },
)
