import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlashlightOff as LucideFlashlightOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlashlightOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlashlightOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlashlightOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlashlightOffIcon` instead.
 */
export const FlashlightOff = FlashlightOffIcon
