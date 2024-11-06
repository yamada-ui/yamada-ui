import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flashlight as LucideFlashlightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlashlightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlashlightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFlashlightIcon} {...props} />,
)

/**
 * @deprecated Use `FlashlightIcon` instead.
 */
export const Flashlight = FlashlightIcon
