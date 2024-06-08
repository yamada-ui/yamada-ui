import { forwardRef } from "@yamada-ui/core"
import { Hexagon as HexagonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HexagonProps = LucideIconProps

/**
 * `Hexagon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hexagon = forwardRef<HexagonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HexagonIcon} {...props} />
))
