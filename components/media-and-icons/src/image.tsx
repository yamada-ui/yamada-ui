import { useMemo } from 'react'
import { ui, forwardRef, HTMLUIProps, CSSUIProps } from '@yamada-ui/system'

type ImageOptions = {
  loading?: 'eager' | 'lazy'
  size?: CSSUIProps['boxSize']
  fit?: CSSUIProps['objectFit']
}

export type ImageProps = HTMLUIProps<'img'> & ImageOptions

export const Image = forwardRef<ImageProps, 'img'>(
  ({ src, srcSet, size: boxSize, fit: objectFit, loading, crossOrigin, ...rest }, ref) => {
    const css = useMemo(
      () => ({
        boxSize,
        objectFit,
      }),
      [boxSize, objectFit],
    )

    return (
      <ui.img
        ref={ref}
        src={src}
        srcSet={srcSet}
        crossOrigin={crossOrigin}
        loading={loading}
        className={'ui-image'}
        __css={css}
        {...rest}
      />
    )
  },
)
