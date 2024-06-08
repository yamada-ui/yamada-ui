import { forwardRef } from "@yamada-ui/core"
import { Diamond as DiamondIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiamondProps = LucideIconProps

/**
 * `Diamond` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Diamond = forwardRef<DiamondProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiamondIcon} {...props} />
))
