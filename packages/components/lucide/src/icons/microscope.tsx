import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Microscope as LucideMicroscopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MicroscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MicroscopeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMicroscopeIcon} {...props} />,
)

/**
 * @deprecated Use `MicroscopeIcon` instead.
 */
export const Microscope = MicroscopeIcon
