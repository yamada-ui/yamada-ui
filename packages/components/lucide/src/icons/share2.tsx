import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Share2 as LucideShare2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Share2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Share2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShare2Icon} {...props} />
))

/**
 * @deprecated Use `Share2Icon` instead.
 */
export const Share2 = Share2Icon
