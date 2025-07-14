"use client"

import { styled } from "@yamada-ui/react"
import Image from "next/image"

export const NextImage = styled(Image, {
  forwardProps: ["fill", "height", "width"],
})
