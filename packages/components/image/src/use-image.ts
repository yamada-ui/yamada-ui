import { useSafeLayoutEffect } from '@yamada-ui/utils'
import { ImgHTMLAttributes, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react'

type HTMLImageElementProps = ImgHTMLAttributes<HTMLImageElement>

export type UseImageProps = {
  src?: string
  srcSet?: string
  sizes?: string
  onLoad?: HTMLImageElementProps['onLoad']
  onError?: HTMLImageElementProps['onError']
  ignoreFallback?: boolean
  crossOrigin?: HTMLImageElementProps['crossOrigin']
  loading?: HTMLImageElementProps['loading']
}

type Status = 'loading' | 'failed' | 'pending' | 'loaded'

export type FallbackStrategy = 'before' | 'after'

export const shouldShowFallbackImage = (status: Status, fallbackStrategy: FallbackStrategy) =>
  (status !== 'loaded' && fallbackStrategy === 'before') ||
  (status === 'failed' && fallbackStrategy === 'after')

export const useImage = ({
  loading,
  src,
  srcSet,
  onLoad,
  onError,
  crossOrigin,
  sizes,
  ignoreFallback,
}: UseImageProps) => {
  const [status, setStatus] = useState<Status>('pending')

  useEffect(() => {
    setStatus(src ? 'loading' : 'pending')
  }, [src])

  const imageRef = useRef<HTMLImageElement | null>()

  const load = useCallback(() => {
    if (!src) return

    flush()

    const img = new Image()

    img.src = src

    if (crossOrigin) img.crossOrigin = crossOrigin
    if (srcSet) img.srcset = srcSet
    if (sizes) img.sizes = sizes
    if (loading) img.loading = loading

    img.onload = (event) => {
      flush()

      setStatus('loaded')

      onLoad?.(event as unknown as SyntheticEvent<HTMLImageElement, Event>)
    }

    img.onerror = (error) => {
      flush()

      setStatus('failed')

      onError?.(error as any)
    }

    imageRef.current = img
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading])

  const flush = () => {
    if (!imageRef.current) return

    imageRef.current.onload = null
    imageRef.current.onerror = null
    imageRef.current = null
  }

  useSafeLayoutEffect(() => {
    if (ignoreFallback) return

    if (status === 'loading') load()

    return () => {
      flush()
    }
  }, [status, load, ignoreFallback])

  return ignoreFallback ? 'loaded' : status
}

export type UseImageReturn = ReturnType<typeof useImage>
