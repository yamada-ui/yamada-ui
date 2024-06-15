import { forwardRef } from "@yamada-ui/core"
import { ArrowUpDown as ArrowUpDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpDownProps = LucideIconProps

/**
 * `ArrowUpDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpDown = forwardRef<ArrowUpDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUpDownIcon} {...props} />
))
