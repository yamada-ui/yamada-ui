import { forwardRef } from "@yamada-ui/core"
import { BadgePoundSterling as BadgePoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgePoundSterlingProps = LucideIconProps

/**
 * `BadgePoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePoundSterling = forwardRef<BadgePoundSterlingProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BadgePoundSterlingIcon} {...props} />
  ),
)
