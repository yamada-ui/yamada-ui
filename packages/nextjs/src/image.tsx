import type { UIComponent, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { ImageProps as NextImageProps } from "next/image"
import NextImage from "next/image"

export type ImageProps = Omit<HTMLUIProps<"img">, keyof NextImageProps> &
  NextImageProps

export const Image: UIComponent<"img", ImageProps> = ui(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "sizes",
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
      "onLoadingComplete",
      "alt",
      "crossOrigin",
      "decoding",
      "loading",
      "referrerPolicy",
      "sizes",
      "src",
      "useMap",
    ].includes(prop),
})
