import type { UIComponent, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type { ImageProps as NextImageProps } from "next/image"
import NextImage from "next/image"

type OmittedNextImageProps = Omit<NextImageProps, "objectFit">

export type ImageProps = Merge<HTMLUIProps<"img">, OmittedNextImageProps>

export const Image: UIComponent<"img", ImageProps> = ui(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "width",
      "height",
      "fill",
      "loader",
      "quality",
      "priority",
      "loading",
      "placeholder",
      "blurDataURL",
      "unoptimized",
      "overrideSrc",
      "sizes",
    ].includes(prop),
})
