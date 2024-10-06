import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScrollText as ScrollTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScrollText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScrollText = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScrollTextIcon} {...props} />
))
