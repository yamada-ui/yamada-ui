import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Merge } from "@yamada-ui/utils"
import type { ImageProps as NextImageProps } from "next/image"
import NextImage from "next/image"

export type ImageProps = Merge<HTMLUIProps<"img">, NextImageProps> &
  ThemeProps<"Image">

const Component = ui<typeof NextImage, ImageProps>(NextImage, {
  disableStyleProp: (prop) => ["width", "height", "fill"].includes(prop),
})

export const Image = forwardRef<ImageProps, "img">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Image", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  return (
    <Component
      ref={ref}
      className={cx("ui-image", className)}
      __css={css}
      {...rest}
    />
  )
})
