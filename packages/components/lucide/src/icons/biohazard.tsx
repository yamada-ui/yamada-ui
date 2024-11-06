import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Biohazard as LucideBiohazardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BiohazardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BiohazardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBiohazardIcon} {...props} />,
)

/**
 * @deprecated Use `BiohazardIcon` instead.
 */
export const Biohazard = BiohazardIcon
