import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudDrizzle as CloudDrizzleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudDrizzle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDrizzle = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CloudDrizzleIcon} {...props} />
))
