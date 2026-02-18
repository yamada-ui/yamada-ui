"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sticker as OriginalStickerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickerIcon = component(Icon)({
  as: OriginalStickerIcon,
}) as Component<"svg", IconProps>
