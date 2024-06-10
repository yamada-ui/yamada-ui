import { forwardRef } from "@yamada-ui/core"
import { ArrowDown01 as ArrowDown01Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDown01Props = LucideIconProps

/**
 * `ArrowDown01` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown01 = forwardRef<ArrowDown01Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDown01Icon} {...props} />
))
