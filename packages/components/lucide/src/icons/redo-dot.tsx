import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RedoDot as RedoDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RedoDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RedoDot = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RedoDotIcon} {...props} />
))
