import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Stethoscope as LucideStethoscopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StethoscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StethoscopeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideStethoscopeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `StethoscopeIcon` instead.
 */
export const Stethoscope = StethoscopeIcon
