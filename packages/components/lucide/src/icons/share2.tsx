import { forwardRef } from "@yamada-ui/core"
import { Share2 as Share2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Share2Props = LucideIconProps

/**
 * `Share2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Share2 = forwardRef<Share2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Share2Icon} {...props} />
))
