import { forwardRef } from "@yamada-ui/core"
import { Minimize as MinimizeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MinimizeProps = LucideIconProps

/**
 * `Minimize` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minimize = forwardRef<MinimizeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MinimizeIcon} {...props} />
))
