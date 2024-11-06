import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PoundSterling as LucidePoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PoundSterlingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePoundSterlingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PoundSterlingIcon` instead.
 */
export const PoundSterling = PoundSterlingIcon
