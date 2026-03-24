"use client"

import type { HTMLStyledProps, Merge } from "@yamada-ui/react"
import type { ImageProps } from "next/image"
import { styled } from "@yamada-ui/react"
import Image from "next/image"

export interface NextImageProps extends Merge<
  HTMLStyledProps<"img">,
  ImageProps
> {}

export const NextImage = styled<"img", NextImageProps>(Image, {
  forwardProps: ["fill", "height", "width"],
})
