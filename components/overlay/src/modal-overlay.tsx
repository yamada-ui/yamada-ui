import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { fadeProps } from '@yamada-ui/transitions'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { useModal } from './'

export type ModalOverlayProps = HTMLUIProps<'div'> &
  Omit<HTMLMotionProps<'div'>, 'color' | 'transition'>

const MotionDiv = ui(motion.div)

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  ({ className, __css, ...rest }, ref) => {
    const { styles, closeOnOverlayClick, onOverlayClick, onClose, animation } = useModal()

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
      <MotionDiv
        ref={ref}
        className={cx('ui-modal-overlay', className)}
        __css={css}
        onClick={() => {
          onOverlayClick?.()
          if (closeOnOverlayClick) onClose?.()
        }}
        {...props}
        {...rest}
      />
    )
  },
)
