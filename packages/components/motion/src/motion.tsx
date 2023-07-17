import { ui, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

type MotionOptions = {
  as?: keyof typeof motion
}

export type MotionProps = Omit<
  HTMLUIProps<'div'>,
  'as' | 'style' | 'onDrag' | 'onDragStart' | 'onDragEnd'
> &
  HTMLMotionProps<'div'> &
  MotionOptions

export const Motion = forwardRef<MotionProps, 'div', false>(
  ({ as = 'div', className, ...rest }, ref) => {
    return (
      <ui.div
        as={motion[as]}
        ref={ref}
        className={cx('ui-motion', className)}
        {...rest}
      />
    )
  },
)
