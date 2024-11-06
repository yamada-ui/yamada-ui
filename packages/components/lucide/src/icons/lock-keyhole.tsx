import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LockKeyhole as LucideLockKeyholeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LockKeyholeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyholeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLockKeyholeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LockKeyholeIcon` instead.
 */
export const LockKeyhole = LockKeyholeIcon
