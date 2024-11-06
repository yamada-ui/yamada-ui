import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sticker as LucideStickerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StickerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StickerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStickerIcon} {...props} />
))

/**
 * @deprecated Use `StickerIcon` instead.
 */
export const Sticker = StickerIcon
