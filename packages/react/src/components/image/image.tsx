import type { CSSProps, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { ImageStyle } from "./image.style"
import { createComponent } from "../../core"
import { imageStyle } from "./image.style"

export interface ImageProps extends HTMLUIProps<"img">, ThemeProps<ImageStyle> {
  /**
   * The CSS `object-fit` property.
   */
  fit?: CSSProps["objectFit"]
}

export const {
  PropsContext: ImagePropsContext,
  usePropsContext: useImagePropsContext,
  withContext,
} = createComponent<ImageProps, ImageStyle>("image", imageStyle)

/**
 * `Image` is a component that displays images with fallback support.
 *
 * @see Docs https://yamada-ui.com/components/image
 */
export const Image: FC<ImageProps> = withContext("img")(
  undefined,
  ({ fit, ...rest }) => ({ objectFit: fit, ...rest }),
)
