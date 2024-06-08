import { forwardRef } from "@yamada-ui/core"
import { ChevronDown as ChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronDownProps = LucideIconProps

/**
 * `ChevronDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronDown = forwardRef<ChevronDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChevronDownIcon} {...props} />
))
