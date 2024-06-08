import { forwardRef } from "@yamada-ui/core"
import { ChevronLast as ChevronLastIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronLastProps = LucideIconProps

/**
 * `ChevronLast` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronLast = forwardRef<ChevronLastProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChevronLastIcon} {...props} />
))
