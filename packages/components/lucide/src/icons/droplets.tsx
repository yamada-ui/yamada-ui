import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Droplets as LucideDropletsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DropletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DropletsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDropletsIcon} {...props} />
))

/**
 * @deprecated Use `DropletsIcon` instead.
 */
export const Droplets = DropletsIcon
