import { forwardRef } from "@yamada-ui/core"
import { ChevronUp as ChevronUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronUpProps = LucideIconProps

/**
 * `ChevronUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronUp = forwardRef<ChevronUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChevronUpIcon} {...props} />
))
