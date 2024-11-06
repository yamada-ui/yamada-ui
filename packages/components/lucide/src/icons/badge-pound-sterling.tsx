import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgePoundSterling as LucideBadgePoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgePoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePoundSterlingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgePoundSterlingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgePoundSterlingIcon` instead.
 */
export const BadgePoundSterling = BadgePoundSterlingIcon
