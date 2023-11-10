import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useModal } from './modal'

export type ModalBodyProps = HTMLUIProps<'main'>

export const ModalBody = forwardRef<ModalBodyProps, 'main'>(
  ({ className, __css, ...rest }, ref) => {
    const { styles, scrollBehavior } = useModal()

    const css: CSSUIObject = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
      ...(__css ? __css : styles.body),
    }

    return (
      <ui.main
        ref={ref}
        className={cx('ui-modal__body', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
