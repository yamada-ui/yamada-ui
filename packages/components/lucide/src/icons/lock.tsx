import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lock as LucideLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLockIcon} {...props} />
))

/**
 * @deprecated Use `LockIcon` instead.
 */
export const Lock = LockIcon
