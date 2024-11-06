import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Blocks as LucideBlocksIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BlocksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BlocksIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBlocksIcon} {...props} />
))

/**
 * @deprecated Use `BlocksIcon` instead.
 */
export const Blocks = BlocksIcon
