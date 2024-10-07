import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GlobeLock as GlobeLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GlobeLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlobeLock = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GlobeLockIcon} {...props} />
))
