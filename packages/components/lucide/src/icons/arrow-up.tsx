import { forwardRef } from "@yamada-ui/core"
import { ArrowUp as ArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpProps = LucideIconProps

/**
 * `ArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp = forwardRef<ArrowUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUpIcon} {...props} />
))
