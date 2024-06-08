import { forwardRef } from "@yamada-ui/core"
import { ArrowDownUp as ArrowDownUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownUpProps = LucideIconProps

/**
 * `ArrowDownUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownUp = forwardRef<ArrowDownUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDownUpIcon} {...props} />
))
