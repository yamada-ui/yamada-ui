import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Minimize as MinimizeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Minimize` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minimize = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MinimizeIcon} {...props} />
))
