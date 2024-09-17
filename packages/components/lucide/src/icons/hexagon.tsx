import { forwardRef } from "@yamada-ui/core"
import { Hexagon as HexagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Hexagon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hexagon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HexagonIcon} {...props} />
))
