import { forwardRef } from "@yamada-ui/core"
import { Maximize as MaximizeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MaximizeProps = LucideIconProps

/**
 * `Maximize` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Maximize = forwardRef<MaximizeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MaximizeIcon} {...props} />
))
