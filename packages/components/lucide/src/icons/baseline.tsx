import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Baseline as LucideBaselineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BaselineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaselineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBaselineIcon} {...props} />
))

/**
 * @deprecated Use `BaselineIcon` instead.
 */
export const Baseline = BaselineIcon
