import { IconButton, IconButtonProps } from '@yamada-ui/button'
import { forwardRef, CSSUIObject, useColorModetValue } from '@yamada-ui/core'
import { ChevronIcon } from '@yamada-ui/icon'
import { cx } from '@yamada-ui/utils'
import { useCarouselContext, useCarouselControl } from './use-carousel'

export type CarouselControlProps = IconButtonProps

export const CarouselControlPrev = forwardRef<CarouselControlProps, 'button'>(
  ({ className, ...rest }, ref) => {
    const { orientation } = useCarouselContext()

    const { getControlProps } = useCarouselControl({ operation: 'prev' })

    return (
      <CarouselControl
        operation='prev'
        className={cx('ui-carousel-control-prev', className)}
        icon={
          <ChevronIcon
            __css={{
              fontSize: '1.5em',
              transform:
                orientation === 'vertical' ? 'rotate(180deg)' : 'rotate(90deg)',
            }}
          />
        }
        {...getControlProps(rest, ref)}
      />
    )
  },
)

export const CarouselControlNext = forwardRef<CarouselControlProps, 'button'>(
  ({ className, ...rest }, ref) => {
    const { orientation } = useCarouselContext()

    const { getControlProps } = useCarouselControl({ operation: 'next' })

    return (
      <CarouselControl
        operation='next'
        className={cx('ui-carousel-control-next', className)}
        icon={
          <ChevronIcon
            __css={{
              fontSize: '1.5em',
              transform:
                orientation === 'vertical' ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          />
        }
        {...getControlProps(rest, ref)}
      />
    )
  },
)

const CarouselControl = forwardRef<
  CarouselControlProps & { operation: 'prev' | 'next' },
  'button'
>(({ className, operation, ...rest }, ref) => {
  const { styles } = useCarouselContext()
  const colorScheme = useColorModetValue('whiteAlpha', 'blackAlpha')

  const css: CSSUIObject = {
    position: 'absolute',
    zIndex: 'kurillin',
    ...styles.control,
    ...styles[operation],
  }

  return (
    <IconButton
      ref={ref}
      className={cx('ui-carousel-control', className)}
      colorScheme={colorScheme}
      isRounded
      __css={css}
      {...rest}
    />
  )
})
