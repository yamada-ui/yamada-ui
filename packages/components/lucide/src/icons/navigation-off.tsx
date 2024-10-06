import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NavigationOff as NavigationOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NavigationOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationOff = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={NavigationOffIcon} {...props} />,
)
