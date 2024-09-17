import { forwardRef } from "@yamada-ui/core"
import { Lock as LockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Lock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lock = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LockIcon} {...props} />
))
