import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { scaleFadeProps, slideFadeProps } from '@yamada-ui/transitions'
import { cx, findChildren, funcAll, getValidChildren, omitObject } from '@yamada-ui/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { PopoverProps, usePopover, PopoverCloseButton } from './'

export type PopoverContentProps = Omit<HTMLUIProps<'section'>, keyof HTMLMotionProps<'section'>> &
  Omit<
    HTMLMotionProps<'section'>,
    | 'color'
    | 'style'
    | 'onDrag'
    | 'onDragEnd'
    | 'onDragStart'
    | 'onAnimationStart'
    | 'variants'
    | 'transition'
  >

const MotionSection = ui(motion.section)

const getPopoverContentProps = (
  animation: PopoverProps['animation'] = 'scale',
  duration?: PopoverProps['duration'],
) => {
  const custom = {
    reverse: true,
    duration,
    enter: { visibility: 'visible' },
    transitionEnd: { exit: { visibility: 'hidden' } },
  }

  switch (animation) {
    case 'scale':
      return {
        ...scaleFadeProps,
        custom: { ...custom, scale: 0.95 },
      }
    case 'top':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetY: -16 },
      }
    case 'right':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 16 },
      }
    case 'left':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: -16 },
      }
    case 'bottom':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetY: 16 },
      }
  }
}

export const PopoverContent = forwardRef<PopoverContentProps, 'section'>(
  ({ className, children, zIndex, ...rest }, ref) => {
    const {
      isOpen,
      closeOnButton,
      getPopperProps,
      getPopoverProps,
      onAnimationComplete,
      animation,
      duration,
      styles,
    } = usePopover()

    const validChildren = getValidChildren(children)
    const [customPopoverCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      PopoverCloseButton,
    )

    const css: CSSUIObject = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      outline: 0,
      ...omitObject(styles.container, ['zIndex']),
    }

    return (
      <ui.div
        {...getPopperProps({ style: { visibility: isOpen ? 'visible' : 'hidden' } })}
        className='ui-popover'
        zIndex={zIndex ?? styles.container.zIndex}
      >
        <MotionSection
          className={cx('ui-popover-content', className)}
          {...getPopoverProps(rest, ref)}
          {...(animation !== 'none' ? getPopoverContentProps(animation, duration) : {})}
          initial={false}
          animate={isOpen ? 'enter' : 'exit'}
          onAnimationComplete={funcAll(onAnimationComplete, rest.onAnimationComplete)}
          __css={css}
        >
          {customPopoverCloseButton ?? (closeOnButton ? <PopoverCloseButton /> : null)}

          {cloneChildren}
        </MotionSection>
      </ui.div>
    )
  },
)
