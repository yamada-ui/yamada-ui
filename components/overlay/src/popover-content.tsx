import { ui, forwardRef, HTMLUIProps, CSSUIObject, UIProps } from '@yamada-ui/core'
import { scaleFadeProps, slideFadeProps } from '@yamada-ui/transitions'
import {
  cx,
  DOMAttributes,
  findChildren,
  funcAll,
  getValidChildren,
  omitObject,
} from '@yamada-ui/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { RefAttributes } from 'react'
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
        custom: { ...custom, offsetX: 0, offsetY: -16 },
      }
    case 'right':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 16, offsetY: 0 },
      }
    case 'left':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: -16, offsetY: 0 },
      }
    case 'bottom':
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 0, offsetY: 16 },
      }
  }
}

export const PopoverContent = forwardRef<PopoverContentProps, 'section'>(
  ({ className, children, zIndex, __css, ...rest }, ref) => {
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
      ...omitObject(__css ?? styles.container, ['zIndex']),
    }

    return (
      <ui.div
        {...getPopperProps({ style: { visibility: isOpen ? 'visible' : 'hidden' } })}
        className='ui-popover'
        zIndex={(zIndex ?? styles.container.zIndex) as UIProps['zIndex']}
      >
        <ui.section
          as={motion.section}
          className={cx('ui-popover-content', className)}
          {...(animation !== 'none' ? getPopoverContentProps(animation, duration) : {})}
          {...(getPopoverProps(rest, ref) as Omit<DOMAttributes & RefAttributes<any>, 'onDrag'>)}
          initial='exit'
          animate={isOpen ? 'enter' : 'exit'}
          exit='exit'
          onAnimationComplete={funcAll(onAnimationComplete, rest.onAnimationComplete)}
          __css={css}
        >
          {customPopoverCloseButton ?? (closeOnButton ? <PopoverCloseButton /> : null)}

          {cloneChildren}
        </ui.section>
      </ui.div>
    )
  },
)
