import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useModal } from './'

export type ModalBodyProps = HTMLUIProps<'main'>

export const ModalBody = forwardRef<ModalBodyProps, 'main'>(({ className, ...rest }, ref) => {
  const { styles, scrollBehavior } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined,
    ...styles.body,
  }

  return <ui.main ref={ref} className={cx('ui-modal-body', className)} __css={css} {...rest} />
})
