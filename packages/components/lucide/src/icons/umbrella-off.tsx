import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UmbrellaOff as LucideUmbrellaOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UmbrellaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUmbrellaOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UmbrellaOffIcon` instead.
 */
export const UmbrellaOff = UmbrellaOffIcon
