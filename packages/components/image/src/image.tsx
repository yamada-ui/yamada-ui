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
  /**
   * The CSS `box-size` property.
   *
   * @deprecated Use `boxSize` instead.
   */
  size?: CSSUIProps["boxSize"]
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
  let {
    className,
    boxSize,
    crossOrigin,
    fallback,
    fallbackStrategy = "beforeLoadOrError",
    fit: objectFit,
    ignoreFallback,
    loading,
    referrerPolicy,
    src,
    srcSet,
    onError,
    onLoad,
    ...rest
  } = omitThemeProps(mergedProps)

  boxSize ??= size
  ignoreFallback = loading != null || ignoreFallback || !fallback

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
          className={cx("ui-image--fallback", className)}
          src={fallback as string | undefined}
          __css={css}
          {...(ignoreFallback ? { ...rest, onError, onLoad } : rest)}
        />
      )
    }
  }

  return (
    <ui.img
      ref={ref}
      className={cx("ui-image", className)}
      crossOrigin={crossOrigin}
      loading={loading}
      referrerPolicy={referrerPolicy}
      src={src}
      srcSet={srcSet}
      __css={css}
      {...(ignoreFallback ? { ...rest, onError, onLoad } : rest)}
    />
  )
})

Image.displayName = "Image"
Image.__ui__ = "Image"
