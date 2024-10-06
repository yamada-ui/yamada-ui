import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Package2 as Package2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Package2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Package2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Package2Icon} {...props} />
))
