import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircuitBoard as CircuitBoardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircuitBoard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircuitBoard = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircuitBoardIcon} {...props} />
))
