import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Computer as LucideComputerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ComputerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ComputerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideComputerIcon} {...props} />
))

/**
 * @deprecated Use `ComputerIcon` instead.
 */
export const Computer = ComputerIcon
