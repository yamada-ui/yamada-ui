import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GlobeLock as LucideGlobeLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GlobeLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlobeLockIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideGlobeLockIcon} {...props} />,
)

/**
 * @deprecated Use `GlobeLockIcon` instead.
 */
export const GlobeLock = GlobeLockIcon
