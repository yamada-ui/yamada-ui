"use client"

import type { FC } from "react"
import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ImageStyle } from "./image.style"
import { createComponent } from "../../core"
import { imageStyle } from "./image.style"

export interface ImageProps
  extends HTMLStyledProps<"img">,
    ThemeProps<ImageStyle> {
  /**
   * The CSS `object-fit` property.
   */
  fit?: CSSProps["objectFit"]
}

const {
  PropsContext: ImagePropsContext,
  usePropsContext: useImagePropsContext,
  withContext,
} = createComponent<ImageProps, ImageStyle>("image", imageStyle)

export { ImagePropsContext, useImagePropsContext }

/**
 * `Image` is a component that displays images with fallback support.
 *
 * @see https://yamada-ui.com/components/image
 */
export const Image: FC<ImageProps> = withContext("img")(
  undefined,
  ({ fit, ...rest }) => ({ objectFit: fit, ...rest }),
)
