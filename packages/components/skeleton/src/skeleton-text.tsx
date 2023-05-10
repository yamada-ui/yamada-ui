import { ui, forwardRef, UIProps, CSSUIObject } from '@yamada-ui/core'
import { useValue } from '@yamada-ui/use-value'
import { cx } from '@yamada-ui/utils'
import { Skeleton, SkeletonProps } from './'

type SkeletonTextOptions = {
  gap?: UIProps['gap']
  textHeight?: UIProps['height']
}

export type SkeletonTextProps = SkeletonProps & SkeletonTextOptions

export const SkeletonText = forwardRef<SkeletonTextProps, 'div'>(
  (
    {
      className,
      noOfLines = 3,
      startColor,
      endColor,
      fadeDuration,
      speed,
      isLoaded,
      gap = '2',
      textHeight = '2',
      children,
      ...rest
    },
    ref,
  ) => {
    const computedNoOfLines = useValue(noOfLines)

    const css: CSSUIObject = {
      w: 'full',
    }

    return (
      <ui.div ref={ref} className={cx('ui-skeleton-text', className)} __css={css} {...rest}>
        {Array(computedNoOfLines)
          .fill(0)
          .map((_, index) => {
            if (isLoaded && index > 0) return null

            const isLast = index + 1 === computedNoOfLines

            const props: SkeletonProps = !isLoaded
              ? {
                  mb: !isLast ? gap : undefined,
                  w: computedNoOfLines > 1 ? (!isLast ? '100%' : '80%') : '100%',
                  h: textHeight,
                }
              : {}

            return (
              <Skeleton
                key={index}
                {...{ startColor, endColor, fadeDuration, speed, isLoaded, ...props }}
              >
                {index === 0 ? children : undefined}
              </Skeleton>
            )
          })}
      </ui.div>
    )
  },
)
