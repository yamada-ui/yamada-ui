import { forwardRef } from "@yamada-ui/core"
import { Sticker as StickerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StickerProps = LucideIconProps

/**
 * `Sticker` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sticker = forwardRef<StickerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StickerIcon} {...props} />
))
