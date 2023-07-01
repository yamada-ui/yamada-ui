import { ui, forwardRef, HTMLUIProps, CSSUIProps } from '@yamada-ui/core'
import { omitObject } from '@yamada-ui/utils'
import { isValidElement, ReactElement, useMemo } from 'react'
import { shouldShowFallbackImage, useImage, UseImageProps } from './use-image'

type ImageOptions = {
  /**
   * Fallback image `src` or element to show if image is loading or image fails.
   */
  fallback?: string | ReactElement
  /**
   * - beforeLoadOrError: loads the fallbackImage while loading the src.
   * - onError: loads the fallbackImage only if there is an error fetching the src.
   *
   * @default "beforeLoadOrError"
   */
  fallbackStrategy?: 'onError' | 'beforeLoadOrError'
  /**
   * The CSS `box-size` property.
   */
  size?: CSSUIProps['boxSize']
  /**
   * The CSS `object-fit` property.
   */
  fit?: CSSUIProps['objectFit']
}

export type ImageProps = Omit<HTMLUIProps<'img'>, keyof UseImageProps> &
  UseImageProps &
  ImageOptions

export const Image = forwardRef<ImageProps, 'img'>((props, ref) => {
  let {
    fallback,
    src,
    srcSet,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = 'beforeLoadOrError',
    referrerPolicy,
    size: boxSize,
    fit: objectFit,
    ...rest
  } = props

  ignoreFallback = loading != null || ignoreFallback || !fallback

  const status = useImage({ ...props, crossOrigin, ignoreFallback })

  const css = useMemo(() => ({ boxSize, objectFit }), [boxSize, objectFit])

  const isFallbackImage = shouldShowFallbackImage(status, fallbackStrategy)

  if (isFallbackImage) {
    if (isValidElement(fallback)) {
      return fallback
    } else {
      return (
        <ui.img
          ref={ref}
          className='ui-image-fallback'
          src={fallback as string | undefined}
          __css={css}
          {...(ignoreFallback ? rest : omitObject(rest, ['onError', 'onLoad']))}
        />
      )
    }
  }

  return (
    <ui.img
      ref={ref}
      src={src}
      srcSet={srcSet}
      crossOrigin={crossOrigin}
      loading={loading}
      referrerPolicy={referrerPolicy}
      className={'ui-image'}
      __css={css}
      {...(ignoreFallback ? rest : omitObject(rest, ['onError', 'onLoad']))}
    />
  )
})
