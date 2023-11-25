import { useSafeLayoutEffect } from "@yamada-ui/utils"
import type { ImgHTMLAttributes, SyntheticEvent } from "react"
import { useCallback, useEffect, useRef, useState } from "react"

type HTMLImageElementProps = ImgHTMLAttributes<HTMLImageElement>

export type UseImageProps = {
  /**
   * The image `src` attribute.
   */
  src?: string
  /**
   * The image `srcset` attribute.
   */
  srcSet?: string
  /**
   * The image `sizes` attribute.
   */
  sizes?: string
  /**
   * A callback for when the image `src` has been loaded.
   */
  onLoad?: HTMLImageElementProps["onLoad"]
  /**
   * A callback for when there was an error loading the image `src`.
   */
  onError?: HTMLImageElementProps["onError"]
  /**
   * If `true`, opt out of the `fallbackSrc` logic and use as `img`.
   *
   * @default false
   */
  ignoreFallback?: boolean
  /**
   * The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded.
   * This tells the browser to request cross-origin access when trying to download the image data.
   */
  crossOrigin?: HTMLImageElementProps["crossOrigin"]
  /**
   * The image `loading` attribute.
   */
  loading?: HTMLImageElementProps["loading"]
}

type Status = "loading" | "failed" | "pending" | "loaded"

export const shouldShowFallbackImage = (
  status: Status,
  fallbackStrategy: "onError" | "beforeLoadOrError",
) =>
  (status !== "loaded" && fallbackStrategy === "beforeLoadOrError") ||
  (status === "failed" && fallbackStrategy === "onError")

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
  const [status, setStatus] = useState<Status>("pending")

  useEffect(() => {
    setStatus(src ? "loading" : "pending")
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

    img.onload = (ev) => {
      flush()

      setStatus("loaded")

      onLoad?.(ev as unknown as SyntheticEvent<HTMLImageElement, Event>)
    }

    img.onerror = (error) => {
      flush()

      setStatus("failed")

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

    if (status === "loading") load()

    return () => {
      flush()
    }
  }, [status, load, ignoreFallback])

  return ignoreFallback ? "loaded" : status
}

export type UseImageReturn = ReturnType<typeof useImage>
