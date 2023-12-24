import type { HTMLUIProps, CSSUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx, omitObject } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import { isValidElement, useMemo } from "react"
import type { UseImageProps } from "./use-image"
import { shouldShowFallbackImage, useImage } from "./use-image"

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
  fallbackStrategy?: "onError" | "beforeLoadOrError"
  /**
   * The CSS `box-size` property.
   */
  size?: CSSUIProps["boxSize"]
  /**
   * The CSS `object-fit` property.
   */
  fit?: CSSUIProps["objectFit"]
}

export type ImageProps = Omit<HTMLUIProps<"img">, keyof UseImageProps> &
  UseImageProps &
  ImageOptions

/**
 * `Image` is a component that displays images with fallback support.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/image
 */
export const Image = forwardRef<ImageProps, "img">((props, ref) => {
  let {
    fallback,
    src,
    srcSet,
    loading,
    ignoreFallback,
    crossOrigin,
    className,
    fallbackStrategy = "beforeLoadOrError",
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
          className={cx("ui-image--fallback", className)}
          src={fallback as string | undefined}
          __css={css}
          {...(ignoreFallback ? rest : omitObject(rest, ["onError", "onLoad"]))}
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
      className={cx("ui-image", className)}
      __css={css}
      {...(ignoreFallback ? rest : omitObject(rest, ["onError", "onLoad"]))}
    />
  )
})
