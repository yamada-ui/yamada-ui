import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { fadeProps } from '@yamada-ui/transitions'
import { cx, handlerAll } from '@yamada-ui/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { useModal } from './'

export type ModalOverlayProps = HTMLUIProps<'div'> &
  Omit<HTMLMotionProps<'div'>, 'color' | 'transition'>

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  ({ className, __css, onClick, ...rest }, ref) => {
    const { styles, closeOnOverlay, onOverlayClick, onClose, animation, duration } = useModal()

    const css: CSSUIObject = {
      position: 'fixed',
      top: 0,
      left: 0,
      w: '100vw',
      h: '100vh',
      ...(__css ? __css : styles.overlay),
    }

    const props = animation !== 'none' ? fadeProps : {}

    return (
      <ui.div
        as={motion.div}
        ref={ref}
        className={cx('ui-modal-overlay', className)}
        custom={{ duration }}
        __css={css}
        onClick={handlerAll(onClick, onOverlayClick, (event) => {
          event.stopPropagation()
          if (closeOnOverlay) onClose?.()
        })}
        {...props}
        {...rest}
      />
    )
  },
)
