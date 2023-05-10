import { forwardRef } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { Skeleton, SkeletonProps } from './'

export type SkeletonCircleProps = SkeletonProps

export const SkeletonCircle = forwardRef<SkeletonCircleProps, 'div'>(
  ({ className, boxSize = '2rem', ...rest }, ref) => {
    return (
      <Skeleton
        ref={ref}
        className={cx('ui-skeleton-circle', className)}
        rounded='full'
        boxSize={boxSize}
        {...rest}
      />
    )
  },
)
