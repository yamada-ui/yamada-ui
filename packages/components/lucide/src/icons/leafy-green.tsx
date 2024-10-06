import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LeafyGreen as LeafyGreenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LeafyGreen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LeafyGreen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LeafyGreenIcon} {...props} />
))
