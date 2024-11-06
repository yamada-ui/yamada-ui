import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LockKeyholeOpen as LucideLockKeyholeOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LockKeyholeOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeOpenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLockKeyholeOpenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LockKeyholeOpenIcon` instead.
 */
export const LockKeyholeOpen = LockKeyholeOpenIcon
