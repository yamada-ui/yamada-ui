import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hexagon as LucideHexagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HexagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HexagonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHexagonIcon} {...props} />
))

/**
 * @deprecated Use `HexagonIcon` instead.
 */
export const Hexagon = HexagonIcon
