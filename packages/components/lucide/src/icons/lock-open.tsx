import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LockOpen as LucideLockOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LockOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockOpenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLockOpenIcon} {...props} />
))

/**
 * @deprecated Use `LockOpenIcon` instead.
 */
export const LockOpen = LockOpenIcon
