import type { CSSUIProps, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactElement } from "react"
import type { UseImageProps } from "./use-image"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { isValidElement, useMemo } from "react"
import { shouldShowFallbackImage, useImage } from "./use-image"

interface ImageOptions {
  /**
   * The CSS `box-size` property.
   *
   * @deprecated Use `boxSize` instead.
   */
  size?: CSSUIProps["boxSize"]
  /**
   * Fallback image `src` or element to show if image is loading or image fails.
   */
  fallback?: ReactElement | string
  /**
   * - beforeLoadOrError: loads the fallbackImage while loading the src.
   * - onError: loads the fallbackImage only if there is an error fetching the src.
   *
   * @default "beforeLoadOrError"
   */
  fallbackStrategy?: "beforeLoadOrError" | "onError"
  /**
   * The CSS `object-fit` property.
   */
  fit?: CSSUIProps["objectFit"]
}

export interface ImageProps
  extends Omit<HTMLUIProps<"img">, keyof UseImageProps>,
    Omit<ThemeProps<"Image">, "size">,
    UseImageProps,
    ImageOptions {}

/**
 * `Image` is a component that displays images with fallback support.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/image
 */
export const Image = forwardRef<ImageProps, "img">((props, ref) => {
  const [styles, { size, ...mergedProps }] = useComponentStyle("Image", props)
  const {
    src,
    srcSet,
    className,
    boxSize = size,
    crossOrigin,
    fallback,
    fallbackStrategy = "beforeLoadOrError",
    fit: objectFit,
    ignoreFallback: _ignoreFallback,
    loading,
    referrerPolicy,
    onError,
    onLoad,
    ...rest
  } = omitThemeProps(mergedProps)
  const ignoreFallback = loading != null || _ignoreFallback || !fallback
  const css = useMemo(
    () => ({ ...styles, boxSize, objectFit }),
    [styles, boxSize, objectFit],
  )
  const status = useImage({ ...props, ignoreFallback })
  const isFallbackImage = shouldShowFallbackImage(status, fallbackStrategy)

  if (isFallbackImage) {
    if (isValidElement(fallback)) {
      return fallback
    } else {
      return (
        <ui.img
          ref={ref}
          src={fallback as string | undefined}
          className={cx("ui-image--fallback", className)}
          __css={css}
          {...(ignoreFallback ? { ...rest, onError, onLoad } : rest)}
        />
      )
    }
  }

  return (
    <ui.img
      ref={ref}
      src={src}
      srcSet={srcSet}
      className={cx("ui-image", className)}
      crossOrigin={crossOrigin}
      loading={loading}
      referrerPolicy={referrerPolicy}
      __css={css}
      {...(ignoreFallback ? { ...rest, onError, onLoad } : rest)}
    />
  )
})

Image.displayName = "Image"
Image.__ui__ = "Image"
