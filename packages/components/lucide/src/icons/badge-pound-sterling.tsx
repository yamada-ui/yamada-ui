import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgePoundSterling as BadgePoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgePoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePoundSterling = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BadgePoundSterlingIcon} {...props} />
  ),
)
