import { ui, forwardRef, HTMLUIProps, CSSUIProps } from '@yamada-ui/core'
import { omitObject } from '@yamada-ui/utils'
import { isValidElement, ReactElement, useMemo } from 'react'
import { FallbackStrategy, shouldShowFallbackImage, useImage, UseImageProps } from './'

type ImageOptions = {
  fallback?: string | ReactElement
  fallbackStrategy?: FallbackStrategy
  size?: CSSUIProps['boxSize']
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
    fallbackStrategy = 'before',
    referrerPolicy,
    size: boxSize,
    fit: objectFit,
    ...rest
  } = props

  ignoreFallback = loading != null || ignoreFallback || !fallback

  const status = useImage({ ...props, ignoreFallback })

  const css = useMemo(() => ({ boxSize, objectFit }), [boxSize, objectFit])

  const isFallbackImage = shouldShowFallbackImage(status, fallbackStrategy)

  if (isFallbackImage) {
    if (isValidElement(fallback)) return fallback

    return (
      <ui.img
        ref={ref}
        className='ui-image-fallback'
        src={fallback}
        __css={css}
        {...(ignoreFallback ? rest : omitObject(rest, ['onError', 'onLoad']))}
      />
    )
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
