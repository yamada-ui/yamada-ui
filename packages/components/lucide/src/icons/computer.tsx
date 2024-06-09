import { forwardRef } from "@yamada-ui/core"
import { Computer as ComputerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ComputerProps = LucideIconProps

/**
 * `Computer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Computer = forwardRef<ComputerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ComputerIcon} {...props} />
))
